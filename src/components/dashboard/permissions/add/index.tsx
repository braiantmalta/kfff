import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { Form, Formik } from 'formik';
import {
  Box,
  Breadcrumbs,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowForwardIos } from '@mui/icons-material';
import * as Yup from 'yup';
import { Text } from '@components/common/text';
import { ButtonLoading } from '@components/common/buttons';
import { AppRouters } from '@utils/constants';
import { InputPermission } from '@graphql/types/permission';
import { PermissionContext } from '@context/permission';
import {
  FormWrapper,
  TwoInputs,
  SwitchWrapper,
  SwitchItem,
  ButtonWrapper,
  ErrorText,
} from '../styles';

export const NewPermissions = () => {
  const theme = useTheme();
  const [resourceValue, setResourceValue] = useState(0);
  const [roleValue, setRoleValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const { addPermissions } = useContext(PermissionContext);
  const router = useRouter();

  const resources = [
    {
      id: 0,
      name: 'Selecione',
    },
    {
      id: 1,
      name: 'Companhia',
    },
    {
      id: 2,
      name: 'Usuário',
    },
    {
      id: 3,
      name: 'Recursos',
    },
    {
      id: 4,
      name: 'Cargo',
    },
    {
      id: 5,
      name: 'Permissão',
    },
    {
      id: 6,
      name: 'Categoria do Produto',
    },
    {
      id: 7,
      name: 'Produto',
    },
  ];

  const roles = [
    {
      id: 0,
      name: 'Selecione',
    },
    {
      id: 1,
      name: 'Administrador',
    },
    {
      id: 2,
      name: 'Moderador',
    },
    {
      id: 3,
      name: 'Cliente',
    },
  ];

  const schema = Yup.object().shape({
    resource_id: Yup.number()
      .required('Selecione uma opção')
      .oneOf(
        resources.map((e) => e.id),
        'Selecione uma opção'
      ),
    role_id: Yup.number()
      .required('Selecione uma opção')
      .oneOf(
        roles.map((e) => e.id),
        'Selecione uma opção'
      ),
    can_create: Yup.boolean().required('').default(false),
    can_read: Yup.boolean().required('').default(false),
    can_update: Yup.boolean().required('').default(false),
    can_delete: Yup.boolean().required('').default(false),
  });

  const initialValues = {
    resource_id: 0,
    role_id: 0,
    can_create: false,
    can_read: false,
    can_update: false,
    can_delete: false,
  };

  const handleSubmit = async (values: InputPermission) => {
    try {
      if (values.resource_id && values.role_id) {
        if (values.resource_id > 0 && values.role_id > 0) {
          setLoading(true);

          await addPermissions(values);

          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Permissão criada com sucesso!',
            confirmButtonColor: theme.palette.info.main,
          });

          router.push(AppRouters.permissions);
          return;
        }
      }

      return;
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
          confirmButtonColor: theme.palette.info.main,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Text type="h6">Inserir Permissões</Text>
      <Breadcrumbs separator={<ArrowForwardIos fontSize="inherit" />}>
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href={AppRouters.permissions}
        >
          permissões
        </Link>
        <Typography key="2" color="text.primary">
          novo
        </Typography>
      </Breadcrumbs>

      <Box>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={schema}
          initialValues={initialValues}
        >
          {({ errors, handleChange }) => (
            <Form>
              <FormWrapper>
                <TwoInputs>
                  <FormControl fullWidth>
                    <InputLabel id="resource-label">Recurso *</InputLabel>
                    <Select
                      name="resource_id"
                      label="Recurso *"
                      labelId="resource-label"
                      id="resource_id"
                      onChange={handleChange}
                      value={resourceValue}
                    >
                      {resources.map((resource) => (
                        <MenuItem
                          value={resource.id}
                          key={resource.id}
                          onClick={() => setResourceValue(resource.id)}
                          disabled={resource.id === 0 ? true : false}
                        >
                          {resource.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <ErrorText>{errors.resource_id}</ErrorText>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id="role-label">Cargo *</InputLabel>
                    <Select
                      name="role_id"
                      label="Cargo *"
                      labelId="role-label"
                      id="role_id"
                      onChange={handleChange}
                      value={roleValue}
                    >
                      {roles.map((role) => (
                        <MenuItem
                          value={role.id}
                          key={role.id}
                          onClick={() => setRoleValue(role.id)}
                          disabled={role.id === 0 ? true : false}
                        >
                          {role.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <ErrorText>{errors.role_id}</ErrorText>
                  </FormControl>
                </TwoInputs>
              </FormWrapper>

              <SwitchWrapper>
                <SwitchItem>
                  <Text type="body1">Leitura</Text>
                  <Switch
                    color="info"
                    name="can_read"
                    onChange={handleChange}
                  />
                </SwitchItem>

                <SwitchItem>
                  <Text type="body1">Escrita</Text>
                  <Switch
                    color="info"
                    name="can_create"
                    onChange={handleChange}
                  />
                </SwitchItem>

                <SwitchItem>
                  <Text type="body1">Edição</Text>
                  <Switch
                    color="info"
                    name="can_update"
                    onChange={handleChange}
                  />
                </SwitchItem>

                <SwitchItem>
                  <Text type="body1">Remoção</Text>
                  <Switch
                    color="info"
                    name="can_delete"
                    onChange={handleChange}
                  />
                </SwitchItem>
              </SwitchWrapper>

              <ErrorText>{errors.can_create}</ErrorText>

              <ButtonWrapper>
                <ButtonLoading
                  loading={loading}
                  variant="contained"
                  type="submit"
                  size="medium"
                >
                  Salvar
                </ButtonLoading>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
