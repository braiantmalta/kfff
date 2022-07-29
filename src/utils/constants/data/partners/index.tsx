import { useTheme } from '@mui/material/styles';

export const partnersItems = () => {
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === 'dark';

  return [
    {
      partnerName: 'Google',
      partnerLogo: '/img/png/logos/google-logo.png',
    },
    {
      partnerName: 'Parafuzo',
      partnerLogo: '/img/png/logos/parafuzo-logo.png',
    },
    {
      partnerName: 'Shopify',
      partnerLogo: isDarkMode
        ? '/img/png/logos/shopify-white-logo.png'
        : '/img/png/logos/shopify-logo.png',
    },
    {
      partnerName: 'Zenklub',
      partnerLogo: '/img/png/logos/zenklub-logo.png',
    },
  ];
};
