import { Link } from '@mui/material';

import {
  InfoBoxContainer,
  InfoBoxWrapper,
  InfoContentBox,
  LinkBox,
  LinkWrapper,
} from './styles';
import { Text } from '@components/common/text';
import { FooterInfoMockType } from '@utils/constants/footerInfos';

type InfoBoxProps = {
  infos: FooterInfoMockType[];
};

export const InfoBox = ({ infos }: InfoBoxProps) => {
  return (
    <InfoBoxWrapper>
      <InfoBoxContainer>
        {infos.map((info) => (
          <InfoContentBox key={info.id}>
            <Text style={{ fontSize: '22px', color: '#FFFFFF' }}>
              <strong>{info.title}</strong>
            </Text>
            <LinkWrapper>
              {info.links.map((link, index) => (
                <LinkBox key={index}>
                  <Link href={link.path} underline="none">
                    <Text style={{ color: '#FFF', fontSize: '20px' }}>
                      {link.textLink}
                    </Text>
                  </Link>
                </LinkBox>
              ))}
            </LinkWrapper>
          </InfoContentBox>
        ))}
      </InfoBoxContainer>
    </InfoBoxWrapper>
  );
};
