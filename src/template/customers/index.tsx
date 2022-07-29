import { useContext } from 'react';
import { Add } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Table } from '@components/dashboard/table';
import { CustomerContext } from '@context/customer';
import { HeadingSection } from '@components/dashboard/headingSection';
import { AppRouters } from '@utils/constants';
import { SearchContainer } from './styles';
import { PrivateRoute } from '@components/dashboard/privateRoute';

const headers = [
  'Foto do usuário',
  'Nome',
  'CPF',
  'Data de Nascimento',
  'E-mail',
  'Ações',
];

export const CustomersTemplate = () => {
  const theme = useTheme();
  const { customers } = useContext(CustomerContext);

  return (
    <PrivateRoute
      component={
        <>
          <HeadingSection
            title="Clientes"
            path={AppRouters.addCustomer}
            buttonText="ADICIONAR CLIENTE"
            icon={<Add />}
          />

          <>
            {/* <SearchContainer variant="elevation">
              <Searchbar color={theme.palette.grey[600]} />
            </SearchContainer> */}

            <Table headers={headers} dataBody={customers} />
          </>
        </>
      }
    />
  );
};
