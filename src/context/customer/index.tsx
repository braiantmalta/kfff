import { useQuery } from '@apollo/client';
import { useApollo } from '@graphql/client';
import { MUTATION_USER_ADD } from '@graphql/mutations/user/userAdd';
import { MUTATION_USER_REMOVE } from '@graphql/mutations/user/userRemove';
import { QUERY_USERS } from '@graphql/queries/user';
import { User, UserInput } from '@graphql/types/user';
import { createContext, ReactNode } from 'react';

type CustomerProviderProps = {
  children: ReactNode;
};

type CustomerContextProps = {
  customers: User[];
  loadingCustomers: boolean;
  customerRemove: (customer_id: Pick<User, 'id'>) => Promise<void>;
  customerAdd: (fields: UserInput) => Promise<void>;
};

export const CustomerContext = createContext<CustomerContextProps>(
  {} as CustomerContextProps
);

export const CustomerProvider = ({ children }: CustomerProviderProps) => {
  const apolloClient = useApollo();
  const { data, loading, refetch } = useQuery<{ users: User[] }>(QUERY_USERS);

  const customerAdd = async (fields: UserInput) => {
    await apolloClient.mutate({
      mutation: MUTATION_USER_ADD,
      variables: {
        fields,
      },
    });
    refetch();
  };

  const customerRemove = async ({ id: customer_id }: Pick<User, 'id'>) => {
    await apolloClient.mutate({
      mutation: MUTATION_USER_REMOVE,
      variables: { id: customer_id },
    });

    refetch();
  };

  return (
    <CustomerContext.Provider
      value={{
        customers: data?.users || [],
        loadingCustomers: loading,
        customerRemove,
        customerAdd,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
