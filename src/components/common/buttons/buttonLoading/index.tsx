import { CSSProperties, ReactNode } from 'react';
import { LoadingButton } from '@mui/lab';

type ButtonLoadingProps = {
  loading?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
  size?: 'large' | 'small' | 'medium';
  children: ReactNode | string;
  fullWidth?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
};

export const ButtonLoading = ({
  children,
  loading,
  type,
  variant = 'contained',
  size,
  fullWidth = false,
  style,
  onClick,
}: ButtonLoadingProps) => {
  return (
    <LoadingButton
      style={style}
      loading={loading}
      type={type}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </LoadingButton>
  );
};
