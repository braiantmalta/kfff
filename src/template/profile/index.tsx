import { Profile } from '@components/dashboard/profile';
import { PrivateRoute } from '@components/dashboard/privateRoute';

export const ProfileTemplate = () => {
  return <PrivateRoute component={<Profile />} />;
};
