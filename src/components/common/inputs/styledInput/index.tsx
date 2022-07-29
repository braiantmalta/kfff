import { Help } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { SxProps } from '@mui/system';
import { ChangeEventHandler, useState } from 'react';
import { BootstrapTooltip } from '@components/common/bootstrapTooltip';
import { ShowPassword } from '../showPassword';

type StyledInputProps = {
  id?: string;
  name?: string;
  label?: string;
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  size?: 'medium' | 'small';
  margin?: 'normal' | 'dense' | 'none';
  required?: boolean;
  onChange?:
    | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  helperText?: any;
  sx?: SxProps;
  disabled?: boolean;
  defaultValue?: string | number | boolean;
  value?: string | number | boolean;
  shrink?: boolean;
  fullWidth?: boolean;
  tooltipMessage?: string;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  inputProps?: any;
};

export const StyledInput = ({
  id,
  label,
  margin,
  name,
  size,
  type,
  required = false,
  onChange,
  helperText,
  sx,
  disabled = false,
  defaultValue,
  value,
  shrink = undefined,
  fullWidth = false,
  tooltipMessage,
  multiline = false,
  rows,
  maxRows,
  inputProps,
}: StyledInputProps) => {
  const [typeState, setTypeState] = useState<string>(type);

  const generateEndAdornment = () => {
    if (tooltipMessage) {
      return (
        <BootstrapTooltip title={tooltipMessage}>
          <Help cursor="pointer" color="action" />
        </BootstrapTooltip>
      );
    }

    if (type === 'password') {
      return <ShowPassword setTypeState={setTypeState} typeState={typeState} />;
    }

    return null;
  };

  return (
    <TextField
      id={id}
      type={typeState}
      name={name}
      label={label}
      size={size}
      required={required}
      margin={margin}
      onChange={onChange}
      value={value}
      error={Boolean(helperText)}
      helperText={helperText}
      defaultValue={defaultValue}
      sx={sx}
      fullWidth={fullWidth}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
      InputLabelProps={{
        shrink,
      }}
      InputProps={{
        endAdornment: generateEndAdornment(),
      }}
      inputProps={inputProps}
    />
  );
};
