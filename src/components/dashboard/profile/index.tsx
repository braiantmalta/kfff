import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { Avatar, Badge, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AddAPhoto } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import Swal from 'sweetalert2';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { StyledInput } from '@components/common/inputs/styledInput';
import { Text } from '@components/common/text';
import { AppRouters } from '@utils/constants';
import { QUERY_USER_CHANGE_PASSWORD } from '@graphql/queries/changePassword';
import { initializeApollo } from '@graphql/client';
import { QUERY_USER_CHANGE_EMAIL } from '@graphql/queries/changeEmail';
import { AuthContext } from '@/context/authentication';
import {
  Container,
  Paper,
  StyledForm,
  Input,
  StyledIconButton,
  StyledAddAPhoto,
  FieldsInRow,
  Buttons,
  Button,
  CancelAndSaveButtons,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string(),
  avatar_url: Yup.string(),
  birthdate: Yup.date(),
});

export const Profile = () => {
  const theme = useTheme();
  const apolloClient = initializeApollo();
  const router = useRouter();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('sm'));
  const { loggedUser: user, updateAvatar, userUpdate } = useContext(
    AuthContext
  );
  const [userPicture, setUserPicture] = useState<{
    file?: File;
    url: string;
  }>();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const threeMBInKB = 3250585.6;
  const imageType = ['image/png', 'image/jpeg', 'image/jpg'];
  enum Actions {
    changeEmail,
    changePassword,
  }

  const requestUpdatePasswordOrEmail = (email: string, actionName: Actions) => {
    Swal.fire({
      icon: 'warning',
      title: 'Você tem certeza?',
      text: 'As instruções serão enviadas no seu e-mail.',
      showCancelButton: true,
      confirmButtonColor: theme.palette.info.main,
      cancelButtonText: 'CANCELAR',
      confirmButtonText: 'ENVIAR',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (actionName === Actions.changePassword) {
            await apolloClient.query({
              query: QUERY_USER_CHANGE_PASSWORD,
              variables: {
                fields: { email },
              },
            });
          }

          if (actionName === Actions.changeEmail) {
            await apolloClient.query({
              query: QUERY_USER_CHANGE_EMAIL,
              variables: {
                fields: { email },
              },
            });
          }

          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Por favor, verifique seu e-mail.',
            confirmButtonColor: theme.palette.info.main,
          });
        } catch (error) {
          error instanceof Error &&
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.message,
              confirmButtonColor: theme.palette.info.main,
            });
        }
      }
    });
  };

  if (!user) return <></>;

  const initialValues = {
    name: user?.name || '',
    birth_date: user?.birth_date || '',
    contacts: user?.contacts,
  };

  const uploadImage = (target: EventTarget & HTMLInputElement) => {
    if (target.files?.length && imageType.includes(target.files[0]?.type)) {
      setUserPicture({
        file: target.files[0],
        url: URL.createObjectURL(target.files[0]),
      });

      return;
    }

    if (!target.files?.length) {
      return;
    }

    if (target.files?.length && !imageType.includes(target.files[0]?.type)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'A imagem não corresponde aos formatos .jpeg, .jpg ou .png',
        confirmButtonColor: theme.palette.info.main,
      });
    }
  };

  const updateProfilePicture = async (values: typeof initialValues) => {
    try {
      setPageLoading(true);
      if (userPicture?.file && userPicture.file.size > threeMBInKB) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'O tamanho do arquivo não deve ser maior que 3.1 MB.',
          confirmButtonColor: theme.palette.info.main,
        });
        return;
      }

      if (userPicture?.file) {
        if (imageType.includes(userPicture?.file.type)) {
          updateAvatar(userPicture.file);
          setUserPicture({ url: userPicture.url });
        }
      }

      const { birth_date, name } = values;
      await userUpdate({
        id: user.id,
        fields: {
          birth_date: new Date(birth_date) || undefined,
          name,
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Seus dados foram alterados.',
        confirmButtonColor: theme.palette.info.main,
      });
    } catch (error) {
      error instanceof Error &&
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
          confirmButtonColor: theme.palette.info.main,
        });
    } finally {
      setPageLoading(false);
    }
  };

  return (
    <>
      <Text type="h6">Meu Perfil</Text>

      <Container>
        <Formik
          initialValues={initialValues}
          onSubmit={updateProfilePicture}
          validationSchema={schema}
        >
          {({ errors, handleChange }) => (
            <Paper variant="elevation">
              <Form style={StyledForm}>
                <Text type="subtitle1" textAlign="center">
                  Foto de perfil
                </Text>

                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={
                    <label htmlFor="icon-button-file">
                      <Input
                        accept=".png, .jpeg, .jpg"
                        id="icon-button-file"
                        type="file"
                        onChange={({ target }) => uploadImage(target)}
                      />
                      <IconButton
                        component="span"
                        color="info"
                        aria-label="upload picture"
                        sx={StyledIconButton}
                      >
                        <AddAPhoto sx={StyledAddAPhoto} />
                      </IconButton>
                    </label>
                  }
                  sx={{
                    marginTop: ({ spacing }) => spacing(1.5),
                    marginBottom: ({ spacing }) => spacing(2),
                  }}
                >
                  <Avatar
                    alt={user.name}
                    src={userPicture?.url || user?.avatar_url || ''}
                    sx={{ width: 132, height: 132 }}
                  />
                </Badge>

                <Text type="body2" secondary textAlign="center">
                  Permitido: *.jpeg, *.jpg, *.png
                </Text>

                <Text type="body2" secondary textAlign="center">
                  tamanho máximo de 3.1 MB
                </Text>

                <StyledInput
                  name="name"
                  label="Nome Completo"
                  margin="normal"
                  type="text"
                  onChange={handleChange}
                  helperText={errors.name}
                  fullWidth
                  defaultValue={initialValues.name}
                />

                <FieldsInRow>
                  <StyledInput
                    name="birth_date"
                    label="Data de nascimento"
                    margin="normal"
                    type="date"
                    onChange={handleChange}
                    helperText={errors.birth_date}
                    shrink
                    fullWidth
                    defaultValue={
                      initialValues?.birth_date?.toString().split('T')[0] || ''
                    }
                  />

                  <StyledInput
                    name="contacts[0].number"
                    label="Celular"
                    margin="normal"
                    type="text"
                    onChange={handleChange}
                    helperText={errors.contacts}
                    fullWidth
                    defaultValue={initialValues.contacts[0]?.number}
                  />
                </FieldsInRow>

                <FieldsInRow>
                  <StyledInput
                    name="email"
                    label="E-mail"
                    margin="normal"
                    type="email"
                    onChange={handleChange}
                    fullWidth
                    defaultValue={user.email}
                    disabled
                  />

                  <StyledInput
                    name="profile"
                    label="Perfil"
                    margin="normal"
                    type="text"
                    onChange={handleChange}
                    defaultValue={user.roles[0].name}
                    fullWidth
                    disabled
                  />
                </FieldsInRow>

                <Buttons>
                  <Button
                    sx={{
                      color: theme.palette.info.main,
                    }}
                    variant="outlined"
                    type="button"
                    size={isMobileVersion ? 'small' : 'medium'}
                    onClick={() =>
                      requestUpdatePasswordOrEmail(
                        user.email,
                        Actions.changeEmail
                      )
                    }
                  >
                    Mudar e-mail
                  </Button>

                  <Button
                    sx={{
                      color: theme.palette.info.main,
                    }}
                    variant="outlined"
                    type="button"
                    size={isMobileVersion ? 'small' : 'medium'}
                    onClick={() =>
                      requestUpdatePasswordOrEmail(
                        user.email,
                        Actions.changePassword
                      )
                    }
                  >
                    Mudar senha
                  </Button>
                </Buttons>
                <CancelAndSaveButtons>
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    size={isMobileVersion ? 'small' : 'medium'}
                    loading={pageLoading}
                    fullWidth={isMobileVersion ? true : false}
                  >
                    Salvar
                  </LoadingButton>

                  <Button
                    sx={{
                      borderColor: theme.palette.error.main,
                    }}
                    variant="outlined"
                    color="error"
                    type="button"
                    size={isMobileVersion ? 'small' : 'medium'}
                    onClick={() => router.push(AppRouters.dashboard)}
                  >
                    Cancelar
                  </Button>
                </CancelAndSaveButtons>
              </Form>
            </Paper>
          )}
        </Formik>
      </Container>
    </>
  );
};
