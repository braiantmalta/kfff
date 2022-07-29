import { Container } from '@components/common/container';
import { Logo } from '@components/common/logo';
import { useRouter } from 'next/router';
import { WhiteFooterWrapper, WhiteFooterContent } from './styles';

export const WhiteFooter = () => {
  const router = useRouter();
  return (
    <WhiteFooterWrapper>
      <Container>
        <WhiteFooterContent>
          <Logo url="/img/png/logo.png" onClick={() => router.push('/')} />
          <img
            width="fit-content"
            height="15px"
            aria-label="sub-logo"
            src="/img/png/sub-logo.png"
            style={{ marginTop: '14px' }}
          />
        </WhiteFooterContent>
      </Container>
    </WhiteFooterWrapper>
  );
};
