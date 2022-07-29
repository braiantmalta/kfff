import { Button } from '@mui/material';
import { MaxContent } from '@styles/globalsStyles';
import { useRouter } from 'next/router';
import { Text } from '../text';
import {
  Wrapper,
  Image,
  FullscreenCardContainer,
  Texts,
  Description,
} from './styles';

type FullscreenCardProps = {
  image: string;
  title: string;
  firstDescription: string;
  secondDescription?: string;
  buttonText: string;
  path: string;
};

export const FullscreenCard = ({
  image,
  title,
  firstDescription,
  secondDescription,
  buttonText,
  path,
}: FullscreenCardProps) => {
  const router = useRouter();

  return (
    <MaxContent>
      <Wrapper>
        <Image src={image} alt={title} loading="lazy" />

        <FullscreenCardContainer>
          <Texts>
            <Text type="h4">{title}</Text>

            <Description>
              <Text type="body1" secondary>
                {firstDescription}
              </Text>

              <Text type="body1" secondary>
                {secondDescription}
              </Text>
            </Description>
          </Texts>

          <Button variant="contained" onClick={() => router.push(path)}>
            {buttonText}
          </Button>
        </FullscreenCardContainer>
      </Wrapper>
    </MaxContent>
  );
};
