import { Container } from '@components/common/container';
import { TermsAndConditionsMock } from '@utils/constants/termsAndConditions';
import { TermsAndConditionContent, TermsAndConditionWrapper } from './styles';
import { TermsGenerator } from './termsGenerator';

export const TermsAndConditions = () => {
  return (
    <TermsAndConditionWrapper>
      <Container>
        <TermsAndConditionContent>
          <TermsGenerator termsAndConditions={TermsAndConditionsMock} />
        </TermsAndConditionContent>
      </Container>
    </TermsAndConditionWrapper>
  );
};
