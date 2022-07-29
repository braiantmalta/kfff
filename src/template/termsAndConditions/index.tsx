import { PageLayout } from '@components/dashboard/layout/pageLayout';
import { TermsAndConditions } from '@components/web/termsAndConditions';

export const TermsAndConditionsTemplate = () => {
  return (
    <PageLayout blackFooter={true}>
      <TermsAndConditions />
    </PageLayout>
  );
};
