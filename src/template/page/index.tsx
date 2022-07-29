import { PageLayout } from '@components/dashboard/layout/pageLayout';
import { LandingPage } from '@components/web/page';

export const LandingPageTemplate = () => {
  return (
    <PageLayout whiteFooter={true}>
      <LandingPage />
    </PageLayout>
  );
};
