import { useContext } from 'react';
import { Formik, Form } from 'formik';
import { Paper } from '@mui/material';
import * as Yup from 'yup';

import { Wrapper } from '@components/common/htmlTags';
import { Text } from '@components/common/text';
import { FlaskMakerContext } from '@context/flaskMaker';
import {
  ButtonBox,
  Container,
  ContentBox,
  StyledForm,
} from '../finalForm/styles';
import { FormHeader } from '../formHeader';
import { StyledInput } from '@components/common/inputs';
import { ButtonLoading } from '@components/common/buttons';
import { AttachmentInput } from '@components/common/inputs/attachmentInput';
import { VisualReferencesTitleBox } from './styles';

type SpecificationsFormInput = {
  name: string;
  email: string;
  phone: string;
  description: string;
};

const schema = Yup.object().shape({
  name: Yup.string().required('insira seu nome'),
  email: Yup.string()
    .email('digite um formato válido de email')
    .required('insira seu email'),
  phone: Yup.string().required('insira o número do seu telefone'),
  description: Yup.string().required('insira a descrição'),
});

export const SpecificationsForm = () => {
  const { handleCloseSpecificationsModal } = useContext(FlaskMakerContext);

  const handleSubmit = (values: SpecificationsFormInput) => {
    console.log('values', values);
  };
  return (
    <Wrapper>
      <Container>
        <Formik
          initialValues={{} as SpecificationsFormInput}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={schema}
          validateOnChange={false}
        >
          {({ errors, handleChange, setFieldValue }) => (
            <Form style={StyledForm}>
              <Paper>
                <FormHeader
                  headerText="Enviar especificações"
                  onCloseClick={() => {
                    handleCloseSpecificationsModal();
                  }}
                />
                <ContentBox>
                  <Text type="subtitle1">
                    Descreva abaixo como você deseja a sua logo para o nosso
                    desginer, as alterações do seu frasco personalizado já estão
                    salvas.
                  </Text>
                  <StyledInput
                    name="name"
                    label="Nome"
                    type="text"
                    margin="normal"
                    onChange={handleChange}
                    helperText={errors.name}
                    fullWidth={true}
                  />
                  <StyledInput
                    name="email"
                    label="E-mail"
                    type="email"
                    margin="normal"
                    onChange={handleChange}
                    helperText={errors.email}
                    fullWidth={true}
                  />
                  <StyledInput
                    name="phone"
                    label="Telefone / WhatsApp"
                    type="text"
                    margin="normal"
                    onChange={handleChange}
                    helperText={errors.phone}
                    fullWidth={true}
                  />
                  <StyledInput
                    name="description"
                    label="Descrição"
                    type="text"
                    margin="normal"
                    onChange={handleChange}
                    helperText={errors.description}
                    fullWidth={true}
                    multiline
                    rows={5}
                  />
                  <VisualReferencesTitleBox>
                    <Text type="subtitle1">Referências visuais</Text>
                  </VisualReferencesTitleBox>
                  <AttachmentInput
                    formik_file_name="visual-references"
                    setFieldValue={setFieldValue}
                  />
                  <ButtonBox>
                    <ButtonLoading fullWidth size="large" type="submit">
                      ENVIAR MENSAGEM
                    </ButtonLoading>
                  </ButtonBox>
                </ContentBox>
              </Paper>
            </Form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
};
