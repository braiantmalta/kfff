import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';

type ShowPasswordProps = {
  typeState: string;
  setTypeState: (state: string) => void;
};

export const ShowPassword = ({
  setTypeState,
  typeState,
}: ShowPasswordProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleChangeVisible = () => {
    setIsVisible(!isVisible);
    setTypeState(typeState === 'password' ? 'text' : 'password');
  };
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleChangeVisible}
        edge="end"
      >
        {isVisible ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};
