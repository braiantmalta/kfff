import { PageLayout } from '@components/dashboard/layout/pageLayout';
import { AboutUs } from '@components/web/aboutUs';

export const AboutUsTemplate = () => {
  return (
    <PageLayout absoluteBlackFooter={true}>
      <AboutUs />
    </PageLayout>
  );
};
