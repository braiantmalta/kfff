import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ReactNode, useContext } from 'react';
import { DarkModeContext } from '@context/theme';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useContext(DarkModeContext);

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
