import { Text } from '@components/common/text';
import {
  TermsGeneratorContent,
  TermsGeneratorWrapper,
  TextBox,
} from './styles';

type TermsAndConditionsType = {
  title: string;
  subTitle?: string;
  texts: {
    text: string;
  }[];
};

type TermsGeneratorProps = {
  termsAndConditions: TermsAndConditionsType[];
};

export const TermsGenerator = ({ termsAndConditions }: TermsGeneratorProps) => {
  return (
    <TermsGeneratorWrapper>
      {termsAndConditions.map((term, index) => (
        <TermsGeneratorContent key={index}>
          <Text type="h5">
            <strong>{term.title}</strong>
          </Text>

          {term.subTitle ? (
            <Text type="h5">
              <strong>{term.subTitle}</strong>
            </Text>
          ) : undefined}

          {term.texts.map((text, index) => (
            <TextBox key={index}>
              <Text type="h6">{text.text}</Text>
            </TextBox>
          ))}
        </TermsGeneratorContent>
      ))}
    </TermsGeneratorWrapper>
  );
};
