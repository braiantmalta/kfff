import { Wrapper } from '@components/common/htmlTags';
import { AboutUsSection } from './aboutUsSection';
import { CatalogSection } from './catalogSection';
import { CertificationSection } from './certificationSection';
import { FooterSection } from './footerSection';
import { InviteSection } from './inviteSection';
import { LogisticSection } from './logisticSection';
import { MainSection } from './mainSection';
import { ManufacturingSection } from './manufacturingSection';
import { QualificationSection } from './qualificationsSection';
import { ServiceSection } from './serviceSection';

export const LandingPage = () => {
  return (
    <Wrapper>
      <MainSection />
      <AboutUsSection />
      <ServiceSection />
      <ManufacturingSection />
      <CatalogSection />
      <CertificationSection />
      <LogisticSection />
      <QualificationSection />
      <InviteSection />
      <FooterSection />
    </Wrapper>
  );
};
