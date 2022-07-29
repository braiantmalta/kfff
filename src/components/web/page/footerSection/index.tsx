import { Container } from '@components/common/container';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { FooterInfosMock } from '@utils/constants/footerInfos';
import { SocialMedia } from '@utils/constants/footerInfos/socialMedia';
import { InfoBox } from './infoBox';
import { BottomBox, FooterContent, FooterWrapper, ImageBox } from './styles';

export const FooterSection = () => {
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <InfoBox infos={FooterInfosMock} />
          <BottomBox>
            <img
              src="/img/png/page/map.png"
              aria-label="map"
              width={isMobileVersion ? '100%' : '377px'}
            />
            <ImageBox>
              {SocialMedia.map((media) => (
                <img
                  src={media.image}
                  aria-label={media.name}
                  key={media.id}
                  height="60"
                  width="fit-content"
                />
              ))}
            </ImageBox>
          </BottomBox>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};
