import Router from 'next/router';
import { useState } from 'react';
import { ArrowForwardIos } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Breadcrumbs,
  Divider,
  Link,
  Tab,
  Typography,
} from '@mui/material';
import { UpdateUserAddress } from './forms/userAddress';
import { UpdateUserData } from './forms/userData';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '@graphql/queries/user';
import { User } from '@graphql/types/user';
import { AppRouters } from '@utils/constants';
import { StyledBox, Content, TabComponent } from './styles';

type CustomerUpdateProps = {
  customer_id: User['id'];
};

export const CustomerUpdate = ({ customer_id }: CustomerUpdateProps) => {
  const [value, setValue] = useState<string>('userData');
  const { data, loading, refetch } = useQuery<{ users: User[] }>(QUERY_USER, {
    variables: { id: customer_id },
  });

  if (loading || !data?.users.length) {
    return <></>;
  }

  if (!data?.users[0].id) {
    Router.push(AppRouters.customers);
  }

  const user = data?.users[0];

  return (
    <Box>
      <Typography variant="h6">Cliente</Typography>
      <Breadcrumbs separator={<ArrowForwardIos fontSize="inherit" />}>
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href={AppRouters.customers}
        >
          clientes
        </Link>
        <Typography key="2" color="text.primary">
          editar
        </Typography>
      </Breadcrumbs>

      <Box mt={2}>
        <TabContext value={value}>
          <StyledBox>
            <TabList
              onChange={(event, value) => setValue(value)}
              variant="scrollable"
            >
              <Tab label="Dados básicos" value="userData" />
              <Tab label="Endereço" value="userAddress" />
            </TabList>
            <Divider />
          </StyledBox>
          <Content>
            <TabPanel value="userData">
              <TabComponent>
                <UpdateUserData
                  customerId={customer_id}
                  userData={user}
                  refetch={refetch}
                />
              </TabComponent>
            </TabPanel>
            <TabPanel value="userAddress">
              <TabComponent>
                <UpdateUserAddress
                  userAddresses={user.address || []}
                  customerId={customer_id}
                  refetch={refetch}
                />
              </TabComponent>
            </TabPanel>
          </Content>
        </TabContext>
      </Box>
    </Box>
  );
};
