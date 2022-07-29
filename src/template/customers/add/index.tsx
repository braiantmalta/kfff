import { NewCustomer } from '@components/dashboard/customer/add/steppers';
import { PrivateRoute } from '@components/dashboard/privateRoute';

export const NewCustomerTemplate = () => {
  return <PrivateRoute component={<NewCustomer />} />;
};
