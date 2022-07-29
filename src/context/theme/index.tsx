import { Theme } from '@mui/material';
import { createTheme, useTheme } from '@mui/material/styles/';
import { Storages } from '@utils/constants';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    xmd: true;
    lg: true;
    xl: true;
  }
}

type DarkModeContextData = {
  theme: Theme;
  colorMode: {
    toggleColorMode: () => void;
  };
};

type DarkModeProviderProps = {
  children: ReactNode;
};

export const DarkModeContext = createContext({} as DarkModeContextData);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const muiTheme = useTheme<Theme>();

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          if (prevMode === 'light') {
            localStorage.setItem(Storages.theme, 'dark');
            return 'dark';
          }

          localStorage.setItem(Storages.theme, 'light');
          return 'light';
        });
      },
    }),
    []
  );

  const theme: Theme = useMemo(
    () =>
      createTheme({
        components: {
          //   MuiButton: {
          //     variants: [
          //       {
          //         props: { variant: 'contained' },
          //         style: {
          //           backgroundColor:
          //             mode === 'light'
          //               ? muiTheme.palette.info.main
          //               : muiTheme.palette.info.light,
          //           padding: `${muiTheme.spacing(0.75)} ${muiTheme.spacing(2)}`,
          //           minWidth: 'auto',
          //           color: muiTheme.palette.common.white,
          //         },
          //       },
          //       {
          //         props: { variant: 'outlined' },
          //         style: {
          //           borderColor:
          //             mode === 'light'
          //               ? muiTheme.palette.info.main
          //               : muiTheme.palette.info.light,
          //           padding: `${muiTheme.spacing(0.75)} ${muiTheme.spacing(2)}`,
          //           minWidth: 'auto',
          //         },
          //       },
          //     ],
          //   },
          //   MuiIconButton: {
          //     variants: [
          //       {
          //         props: {},
          //         style: {
          //           minWidth: 'auto',
          //           color: muiTheme.palette.common.white,
          //         },
          //       },
          //     ],
          //   },
          // },
          // palette: {
          //   mode,
          //   ...(mode === 'light' && {
          //     background: {
          //       default: '#FAFAFA',
          //     },
          //   }),
          // },
          // breakpoints: {
          //   values: {
          //     xs: 0,
          //     sm: 600,
          //     md: 900,
          //     xmd: 1180,
          //     lg: 1256,
          //     xl: 1536,
          //   },
        },
      }),
    [mode]
  );

  useEffect(() => {
    const localTheme = window.localStorage.getItem(Storages.theme);

    if (localTheme === 'dark') {
      setMode('dark');
      return;
    }

    setMode('light');
  }, []);

  return (
    <DarkModeContext.Provider
      value={{
        theme,
        colorMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
