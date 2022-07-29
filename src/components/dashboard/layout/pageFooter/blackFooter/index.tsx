import { Container } from '@components/common/container';
import { Logo } from '@components/common/logo';
import { useRouter } from 'next/router';
import { BlackFooterContent, BlackFooterWrapper } from './styles';

export const BlackFooter = () => {
  const router = useRouter();
  return (
    <BlackFooterWrapper>
      <Container>
        <BlackFooterContent>
          <Logo
            url="/img/png/white-logo.png"
            onClick={() => router.push('/')}
          />
          <img
            width="fit-content"
            height="15px"
            aria-label="sub-logo"
            src="/img/png/white-sub-logo.png"
            style={{ marginTop: '14px' }}
          />
        </BlackFooterContent>
      </Container>
    </BlackFooterWrapper>
  );
};
