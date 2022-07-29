import { ReactNode } from 'react';
import { User, UserUpdateInput } from '../../../graphql/types/user';

export type AuthProviderInterface = {
  children: ReactNode;
};

export type UserLogin = {
  email: string;
  password: string;
};

export type UserRegister = {
  name: string;
  email: string;
  password: string;
};

export type AuthContextInterface = {
  signIn: ({ email, password }: UserLogin) => void;
  logOut: () => void;
  signUp: ({ name, email, password }: UserRegister) => Promise<void>;
  loggedUser: User | null;
  verifyLoggedUser: () => boolean;
  updateAvatar: (file: File) => void;
  userUpdate: (values: UserUpdateInput) => Promise<void>;
  authLoading: boolean;
};

export type UserAuthentication = {
  token: string;
  user: User;
};
