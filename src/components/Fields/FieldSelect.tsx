import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  Select,
  SelectProps,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

interface FieldSelectProps extends SelectProps {
  label: string;
  id: string;
  selectOptions: { id: string; value: string | number; displayValue: string }[];
  labelStyle?: FormLabelProps;
  formControlStyle?: FormControlProps;
  helperText?: string;
}

// Implement FieldHelper inside formControl
export const FieldSelect: React.FC<FieldSelectProps> = ({
  label,
  labelStyle,
  formControlStyle,
  id,
  selectOptions,
  helperText,
  ...rest
}) => {
  const [field, { error }] = useField(id);
  return (
    <FormControl {...formControlStyle}>
      <FormLabel fontWeight={600} {...labelStyle}>
        {label}
      </FormLabel>
      <Select {...field} id={id} name={id} bg='white' {...rest}>
        {selectOptions.map((option) => (
          <option key={option.id} value={option.value} id={option.id}>
            {option.displayValue}
          </option>
        ))}
      </Select>
      {helperText && (
        <FormHelperText fontSize='xs'>{helperText}</FormHelperText>
      )}
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
