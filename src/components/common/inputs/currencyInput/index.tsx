import { ReactNode } from 'react';
import NumberFormat, { FormatInputValueFunction } from 'react-number-format';
import { FormControl, TextField } from '@mui/material';
import { regexPatterns } from '@utils/regexPatterns';

type CurrencyInputProps = {
  ariaLabel?: string;
  variant?: 'outlined' | 'standard' | 'filled' | undefined;
  fullWidth?: boolean | undefined;
  margin?: 'none' | 'normal' | 'dense' | undefined;
  name: string;
  label: string;
  defaultValue?: number | string;
  value?: string | number | null | undefined;
  prefix?: string | undefined;
  thousandSeparator?: string | boolean | undefined;
  decimalSeparator?: string | undefined;
  allowNegative?: boolean | undefined;
  isNumericString?: boolean | undefined;
  displayType?: 'input' | 'text' | undefined;
  type?: 'text' | 'tel' | 'password' | undefined;
  format?: string | FormatInputValueFunction | undefined;
  mask?: string | string[] | undefined;
  helperText?: ReactNode;
  removeFormatting?: ((formattedValue: string) => string) | undefined;
  allowLeadingZeros?: boolean | undefined;
  setFieldValue?: any;
  required?: boolean;
};

export const CurrencyInput = ({
  ariaLabel,
  variant = 'outlined',
  fullWidth = true,
  margin = 'normal',
  name,
  label,
  defaultValue,
  value,
  prefix = 'R$ ',
  thousandSeparator = '.',
  decimalSeparator = ',',
  allowNegative = true,
  isNumericString = false,
  displayType = 'input',
  type = 'text',
  format,
  mask,
  helperText,
  removeFormatting,
  allowLeadingZeros = true,
  setFieldValue,
  required = false,
}: CurrencyInputProps) => {
  return (
    <>
      <FormControl
        aria-label={ariaLabel}
        variant={variant}
        fullWidth={fullWidth}
        margin={margin}
      >
        <NumberFormat
          name={name}
          label={label}
          onChange={({ target }: any) => {
            setFieldValue(
              name,
              parseFloat(
                target.value
                  .replace('R$', '')
                  .replace(' ', '')
                  .replace(regexPatterns.RegExRemoveDot, '')
                  .replace(',', '.')
              )
            );
          }}
          defaultValue={defaultValue}
          value={value}
          prefix={prefix}
          thousandSeparator={thousandSeparator}
          decimalSeparator={decimalSeparator}
          allowNegative={allowNegative}
          isNumericString={isNumericString}
          displayType={displayType}
          type={type}
          format={format}
          mask={mask}
          removeFormatting={removeFormatting}
          allowLeadingZeros={allowLeadingZeros}
          required={required}
          customInput={TextField}
          error={Boolean(helperText)}
          helperText={helperText}
        />
      </FormControl>
    </>
  );
};
