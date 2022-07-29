import { styled } from '@mui/material/styles';
import {
  Accordion as MUIAccordion,
  AccordionSummary as MUIAccordionSummary,
  AccordionDetails as MUIAccordionDetails,
} from '@mui/material';

export const Icon = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: 'inherit',
}));

export const AccordionSummary = styled(MUIAccordionSummary)(() => ({
  alignItems: 'baseline',
  padding: 0,
  minHeight: 'auto',

  ['.MuiAccordionSummary-content']: {
    margin: 0,
  },
}));

export const Accordion = styled(MUIAccordion)(() => ({
  boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2)',
}));

export const AccordionDetails = styled(MUIAccordionDetails)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}));
