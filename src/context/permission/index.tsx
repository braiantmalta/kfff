import { createContext, ReactNode } from 'react';
import { initializeApollo } from '@graphql/client';
import { QUERY_PERMISSIONS } from '@graphql/queries/permissions';
import { InputPermission, Permission } from '@graphql/types/permission';
import { useQuery } from '@apollo/client';
import { MUTATION_PERMISSION_REMOVE } from '@graphql/mutations/permissions/permissionRemove';
import { MUTATION_PERMISSION_ADD } from '@graphql/mutations/permissions/addPermissions';
import { MUTATION_PERMISSION_UPDATE } from '@graphql/mutations/permissions/updatePermission';

type PermissionProviderProps = {
  children: ReactNode;
};

type PermissionContextProps = {
  permissions: Permission[];
  loadingPermissions: boolean;
  permissionRemove: (permission_id: Pick<Permission, 'id'>) => Promise<void>;
  getPermissions: () => Promise<void>;
  addPermissions: (fields: InputPermission) => Promise<void>;
  updatePermission: (
    fields: InputPermission,
    permission_id: Permission['id']
  ) => Promise<void>;
};

export const PermissionContext = createContext<PermissionContextProps>(
  {} as PermissionContextProps
);

export const PermissionProvider = ({ children }: PermissionProviderProps) => {
  const apolloClient = initializeApollo();
  const { data, loading, refetch } = useQuery<{ permissions: Permission[] }>(
    QUERY_PERMISSIONS
  );

  const getPermissions = async () => {
    await apolloClient.query({
      query: QUERY_PERMISSIONS,
    });
    refetch();
  };

  const permissionRemove = async ({
    id: permission_id,
  }: Pick<Permission, 'id'>) => {
    await apolloClient.mutate({
      mutation: MUTATION_PERMISSION_REMOVE,
      variables: { id: permission_id },
    });

    refetch();
  };

  const addPermissions = async (fields: InputPermission) => {
    await apolloClient.mutate({
      mutation: MUTATION_PERMISSION_ADD,
      variables: {
        fields,
      },
    });
  };

  const updatePermission = async (
    fields: InputPermission,
    permission_id: Permission['id']
  ) => {
    await apolloClient.mutate({
      mutation: MUTATION_PERMISSION_UPDATE,
      variables: {
        fields,
        id: permission_id,
      },
    });
  };

  return (
    <PermissionContext.Provider
      value={{
        getPermissions,
        addPermissions,
        updatePermission,
        permissionRemove,
        permissions: data?.permissions || [],
        loadingPermissions: loading,
      }}
    >
      {children}
    </PermissionContext.Provider>
  );
};
