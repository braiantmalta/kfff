import { PageLayout } from '@components/dashboard/layout/pageLayout';
import { ContactUs } from '@components/web/contactUs';

export const ContactUsTemplate = () => {
  return (
    <PageLayout absoluteBlackFooter={true}>
      <ContactUs />
    </PageLayout>
  );
};
