import { LogoWrapper } from './styles';

type LogoProps = {
  url: string;
  ariaLabel?: string;
  style?: any;
  onClick?: () => any;
};

export const Logo = ({ url, ariaLabel, style, onClick }: LogoProps) => {
  return (
    <LogoWrapper
      src={url}
      aria-label={ariaLabel}
      style={style}
      onClick={onClick}
    />
  );
};
