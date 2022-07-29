import { CSSProperties } from 'react';
import { BannerImage } from './styles';

type StyledImageProps = {
  src: string;
  ariaLabel: string;
  style?: CSSProperties;
};

export const StyledImage = ({ src, ariaLabel, style }: StyledImageProps) => {
  return <BannerImage src={src} aria-label={ariaLabel} style={style} />;
};
