import { BlackButton } from '@components/common/buttons';
import { Wrapper } from '@components/common/htmlTags';
import { Text } from '@components/common/text';
import { Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import {
  ButtonsBox,
  LeftSideBox,
  RightImage,
  RightSideBox,
  SuccessContent,
  TextBox,
} from './styles';

export const SuccessPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Wrapper>
      <SuccessContent>
        <LeftSideBox>
          <Text type="h4">
            Obrigado pela preferência! <br /> A KEFF agradece!
          </Text>
          <TextBox>
            <Text type="subtitle1">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </TextBox>
          <ButtonsBox>
            <BlackButton
              size="large"
              sx={{ width: isMobileVersion ? '100%' : '264px' }}
            >
              ENTRAR EM CONTATO
            </BlackButton>
            <Button
              variant="outlined"
              size="large"
              sx={{
                width: isMobileVersion ? '100%' : '264px',
                color: '#1A1A1A',
                borderColor: '#1A1A1A',
                '&:hover': { borderColor: '#8D8D8D' },
              }}
              onClick={() => {
                router.push('/');
              }}
            >
              Customizar novamente
            </Button>
          </ButtonsBox>
        </LeftSideBox>

        <RightSideBox>
          <RightImage src="/img/png/fireworks.png" />
        </RightSideBox>
      </SuccessContent>
    </Wrapper>
  );
};
