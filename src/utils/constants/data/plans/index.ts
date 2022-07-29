import { useTheme } from '@mui/material/styles';

export const plansItems = () => {
  const theme = useTheme();

  return [
    {
      planName: 'Basic',
      benefits: [
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: false,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: false,
          benefit: 'Amet minim mollit non deserunt .',
        },
      ],
      price: 50,
      path: '/',
      isRecomended: false,
      planNameColor: theme.palette.success.main,
    },
    {
      planName: 'Premium',
      benefits: [
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: false,
          benefit: 'Amet minim mollit non deserunt .',
        },
      ],
      price: 150,
      path: '/',
      isRecomended: true,
      planNameColor: theme.palette.info.main,
    },
    {
      planName: 'Unlimited',
      benefits: [
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
        {
          isChecked: true,
          benefit: 'Amet minim mollit non deserunt .',
        },
      ],
      price: 350,
      path: '/',
      isRecomended: false,
      planNameColor: theme.palette.warning.main,
    },
  ];
};
