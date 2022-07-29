import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { useContext, useEffect } from 'react';
import {
  IconButton,
  Switch,
  TableCell,
  TableRow,
  ToggleButton,
} from '@mui/material';
import {
  Add,
  DeleteOutlined,
  EditOutlined,
  FilterList,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { HeadingSection } from '@components/dashboard/headingSection';
import { Table } from '@components/dashboard/table';
import { AppRouters } from '@utils/constants';
import { PermissionContext } from '@context/permission';
import { InputPermission, Permission } from '@graphql/types/permission';
import { SearchContainer } from './styles';

const headers = [
  'ID',
  'Recurso',
  'Cargo',
  'Leitura',
  'Escrita',
  'Edição',
  'Remoção',
  'Ações',
];

export const Permissions = () => {
  const theme = useTheme();
  const Router = useRouter();
  const {
    permissions,
    getPermissions,
    updatePermission,
    permissionRemove,
  } = useContext(PermissionContext);

  const handleSubmit = async (
    values: InputPermission,
    permission_id: Permission['id']
  ) => {
    Swal.fire({
      icon: 'warning',
      title: 'Você tem certeza?',
      text: 'A permissão será alterada.',
      showCancelButton: true,
      confirmButtonColor: theme.palette.info.main,
      cancelButtonText: 'CANCELAR',
      confirmButtonText: 'CONFIRMAR',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await updatePermission(values, permission_id);

          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Permissão editada com sucesso!',
            confirmButtonColor: theme.palette.info.main,
          });
        } catch (error) {
          if (error instanceof Error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.message,
              confirmButtonColor: theme.palette.info.main,
            });
          }
        }
      }
    });
  };

  useEffect(() => {
    getPermissions();
  }, [permissions]);

  const handleRemovePermission = ({
    id: permission_id,
  }: Pick<Permission, 'id'>) => {
    Swal.fire({
      icon: 'warning',
      title: 'Você tem certeza?',
      text: `está permissão será removida.`,
      showCancelButton: true,
      confirmButtonColor: theme.palette.info.main,
      cancelButtonText: 'CANCELAR',
      confirmButtonText: 'REMOVER',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await permissionRemove({ id: permission_id });

          Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            confirmButtonColor: theme.palette.info.main,
          });
        } catch (error) {
          error instanceof Error &&
            Swal.fire({
              icon: 'error',
              title: 'Ops...',
              text: error.message,
              confirmButtonColor: theme.palette.info.main,
            });
        }
      }
    });
  };

  return (
    <>
      <HeadingSection
        title="Permissões"
        path={AppRouters.addPermissions}
        buttonText="ADICIONAR PERMISSÃO"
        icon={<Add />}
      />

      <SearchContainer variant="elevation">
        <ToggleButton value="left" key="left">
          <FilterList />
        </ToggleButton>
      </SearchContainer>

      <Table headers={headers}>
        {permissions.map((permission) => (
          <TableRow key={permission.id}>
            <TableCell>{permission.id}</TableCell>

            <TableCell>{permission.resource.name}</TableCell>

            <TableCell>{permission.role.name}</TableCell>

            <TableCell>
              <Switch
                name="read"
                inputProps={{ 'aria-label': 'read' }}
                checked={permission.can_read}
                color="info"
                onClick={() =>
                  handleSubmit(
                    permission.can_read
                      ? { can_read: false }
                      : { can_read: true },
                    permission.id
                  )
                }
              />
            </TableCell>

            <TableCell>
              <Switch
                name="write"
                inputProps={{ 'aria-label': 'write' }}
                checked={permission.can_create}
                color="info"
                onClick={() =>
                  handleSubmit(
                    permission.can_create
                      ? { can_create: false }
                      : { can_create: true },
                    permission.id
                  )
                }
              />
            </TableCell>

            <TableCell>
              <Switch
                name="edit"
                inputProps={{ 'aria-label': 'edit' }}
                checked={permission.can_update}
                color="info"
                onClick={() =>
                  handleSubmit(
                    permission.can_update
                      ? { can_update: false }
                      : { can_update: true },
                    permission.id
                  )
                }
              />
            </TableCell>

            <TableCell>
              <Switch
                name="delete"
                inputProps={{ 'aria-label': 'remove' }}
                checked={permission.can_delete}
                color="info"
                onClick={() =>
                  handleSubmit(
                    permission.can_delete
                      ? { can_delete: false }
                      : { can_delete: true },
                    permission.id
                  )
                }
              />
            </TableCell>

            <TableCell align="center">
              <IconButton
                aria-label="edit customer"
                onClick={() => {
                  Router.push(
                    `${AppRouters.updatePermission}/${permission.id}`
                  );
                }}
              >
                <EditOutlined
                  sx={{ color: ({ palette }) => palette.text.primary }}
                />
              </IconButton>

              <IconButton
                aria-label="delete customer"
                onClick={() =>
                  handleRemovePermission({
                    id: permission.id,
                  })
                }
              >
                <DeleteOutlined
                  sx={{ color: ({ palette }) => palette.text.primary }}
                />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </>
  );
};
