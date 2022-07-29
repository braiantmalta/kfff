import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

type CheckboxProps = {
  label: string;
  name: string;
  onChange?: any;
};

export const Checkbox = ({ label, name, onChange }: CheckboxProps) => (
  <FormControlLabel
    name={name}
    label={label}
    onChange={onChange}
    control={<MuiCheckbox />}
  />
);
