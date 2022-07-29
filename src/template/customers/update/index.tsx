import { CustomerUpdate } from '@components/dashboard/customer/update';
import { PrivateRoute } from '@components/dashboard/privateRoute';
import { User } from '@graphql/types/user';

type CustomerUpdateTemplateProps = {
  customer_id: User['id'];
};

export const CustomerUpdateTemplate = ({
  customer_id,
}: CustomerUpdateTemplateProps) => {
  return (
    <PrivateRoute component={<CustomerUpdate customer_id={customer_id} />} />
  );
};
