import { createContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { useTheme } from '@mui/material/styles';
import { initializeApollo } from '../../graphql/client';
import { QUERY_USER_LOGIN } from '../../graphql/queries/login';
import { QUERY_USER_PROFILE } from '../../graphql/queries/user';
import { User, UserUpdateInput } from '../../graphql/types/user';
import {
  AuthContextInterface,
  AuthProviderInterface,
  UserAuthentication,
  UserLogin,
  UserRegister,
} from './types';
import { AppRouters, Storages } from '../../utils/constants';
import { MUTATION_USER_ADD } from '@graphql/mutations/user/userAdd';
import Swal from 'sweetalert2';
import { MUTATION_PROFILE_PICTURE } from '@graphql/mutations/appProfilePicture';
import { MUTATION_USER_UPDATE } from '@graphql/mutations/user/userUpdate';

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider = ({ children }: AuthProviderInterface) => {
  const theme = useTheme();
  const apolloClient = initializeApollo();
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const signIn = async ({ email, password }: UserLogin) => {
    try {
      setAuthLoading(true);
      const {
        data: { login },
      } = await apolloClient.query<{ login: UserAuthentication }>({
        query: QUERY_USER_LOGIN,
        variables: {
          email,
          password,
        },
      });
      localStorage.setItem(Storages.userToken, login.token);
      setLoggedUser(login.user);
      setAuthLoading(false);
      await Router.push(AppRouters.dashboard);
    } catch (error) {
      setAuthLoading(false);

      if (error instanceof Error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo deu errado.',
          confirmButtonColor: theme.palette.info.main,
        });
      }
    }
  };

  const signUp = async ({ name, email, password }: UserRegister) => {
    await apolloClient.mutate<{
      userAdd: UserAuthentication;
    }>({
      mutation: MUTATION_USER_ADD,
      variables: {
        fields: {
          name,
          email,
          password,
        },
      },
    });
  };

  useEffect(() => {
    const userToken = localStorage.getItem(Storages.userToken);

    if (userToken) {
      apolloClient
        .query<{ userProfile: User }>({
          query: QUERY_USER_PROFILE,
          variables: {
            token: userToken,
          },
        })
        .then(({ data }) => setLoggedUser(data.userProfile))
        .catch(() => logOut());
    }
  }, []);

  const updateAvatar = async (file: File) => {
    const { data } = await apolloClient.mutate<{
      addProfilePicture: { avatar_url: string };
    }>({
      mutation: MUTATION_PROFILE_PICTURE,
      variables: {
        picture: file,
        userId: loggedUser?.id,
      },
    });

    setLoggedUser((old) => {
      if (old) {
        return {
          ...old,
          avatar_url: data?.addProfilePicture.avatar_url,
        };
      }
      return old;
    });
  };

  const logOut = () => {
    localStorage.removeItem(Storages.userToken);
    Router.push(AppRouters.login);
  };

  const verifyLoggedUser = (): boolean => {
    const userKey = localStorage.getItem(Storages.userToken);
    return !!userKey;
  };

  const userUpdate = async ({ id, fields }: UserUpdateInput) => {
    const { data } = await apolloClient.mutate<{ userUpdate: User }>({
      mutation: MUTATION_USER_UPDATE,
      variables: {
        id,
        fields,
      },
    });

    data?.userUpdate && setLoggedUser(data?.userUpdate);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        logOut,
        signUp,
        verifyLoggedUser,
        updateAvatar,
        userUpdate,
        loggedUser,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
