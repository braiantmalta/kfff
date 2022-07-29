import { ResetEmail } from '@components/web/resetPasswordAndEmail/resetEmail';
import { PrivateRoute } from '@components/dashboard/privateRoute';

export const ResetEmailTemplate = () => {
  return <PrivateRoute noLayout component={<ResetEmail />} />;
};
