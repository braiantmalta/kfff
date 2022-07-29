import Router from 'next/router';
import Swal from 'sweetalert2';
import { useContext, ReactNode } from 'react';
import { EditOutlined, DeleteOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import {
  Table as MUITable,
  TableBody,
  TableContainer,
  Paper,
  TableRow,
  TableCell,
  TableHead,
  IconButton,
  Avatar,
} from '@mui/material';
import { User } from '@graphql/types/user';
import { CustomerContext } from '@context/customer';
import { AppRouters } from '@utils/constants';

type TableProps = {
  headers: string[];
  dataBody?: User[];
  children?: ReactNode;
};

export const Table = ({ headers, dataBody, children }: TableProps) => {
  const { customerRemove } = useContext(CustomerContext);
  const theme = useTheme();

  const handleRemoveCustomer = ({
    email,
    id: customer_id,
  }: Pick<User, 'email' | 'id'>) => {
    Swal.fire({
      icon: 'warning',
      title: 'Você tem certeza?',
      text: `remover o usuario: ${email}`,
      showCancelButton: true,
      confirmButtonColor: theme.palette.info.main,
      cancelButtonText: 'CANCELAR',
      confirmButtonText: 'REMOVER',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await customerRemove({ id: customer_id });

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
    <TableContainer
      component={Paper}
      sx={{ marginBottom: ({ spacing }) => spacing(3) }}
      variant="elevation"
    >
      <MUITable aria-label="customers table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => {
              if (header === 'Ações') {
                return (
                  <TableCell
                    key={index}
                    align="center"
                    style={{ minWidth: 140 }}
                  >
                    {header}
                  </TableCell>
                );
              } else {
                return (
                  <TableCell key={index} style={{ minWidth: 180 }}>
                    {header}
                  </TableCell>
                );
              }
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {children}

          {dataBody?.map((dataBodyItem) => (
            <TableRow key={dataBodyItem.id}>
              <TableCell style={{ minWidth: 120 }}>
                <Avatar
                  alt={dataBodyItem.name}
                  src={dataBodyItem.avatar_url || ''}
                  sx={{ width: 56, height: 56 }}
                />
              </TableCell>

              <TableCell>{dataBodyItem.name}</TableCell>

              <TableCell>{dataBodyItem.cpf || 'não informado'}</TableCell>

              <TableCell>
                {dataBodyItem.birth_date
                  ? new Date(dataBodyItem.birth_date)
                      .toLocaleString()
                      .split(' ')[0]
                  : 'não informado'}
              </TableCell>

              <TableCell>{dataBodyItem.email}</TableCell>

              {/* {!dataBodyItem.status ? (
                ''
              ) : (
                <TableCell align="center">
                  <Text
                    type="body1"
                    sx={
                      dataBodyItem.status === 'Ativo'
                        ? Styles.activeStatus
                        : Styles.inactiveStatus
                    }
                  >
                    {dataBodyItem.status === 'Ativo' ? 'Ativo' : 'Inativo'}
                  </Text>
                </TableCell>
              )} */}

              <TableCell align="center">
                <IconButton
                  aria-label="edit customer"
                  onClick={() =>
                    Router.push(
                      `${AppRouters.updateCustomer}/${dataBodyItem.id}`
                    )
                  }
                >
                  <EditOutlined
                    sx={{ color: ({ palette }) => palette.text.primary }}
                  />
                </IconButton>

                <IconButton
                  aria-label="delete customer"
                  onClick={() =>
                    handleRemoveCustomer({
                      id: dataBodyItem.id,
                      email: dataBodyItem.email,
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
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};
