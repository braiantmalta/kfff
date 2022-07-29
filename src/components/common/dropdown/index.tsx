import { ReactNode } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails, Icon } from './styles';

type AccordionProps = {
  title?: string;
  children?: ReactNode;
  ariaControls?: string;
  id?: string;
  icon?: ReactNode;
  dropdownItem?: ReactNode;
};

export const Dropdown = ({
  title,
  children,
  ariaControls,
  id,
  icon,
  dropdownItem,
}: AccordionProps) => {
  return (
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={ariaControls}
        id={id}
      >
        {icon && <Icon>{icon}</Icon>}
        {title || dropdownItem}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
