import { DashboardLayout } from '@components/dashboard/layout';
import { SuccessPage } from '@components/dashboard/successPage';

export const SuccessPageTemplate = () => {
  return (
    <DashboardLayout isSuccessPage={true}>
      <SuccessPage />
    </DashboardLayout>
  );
};
