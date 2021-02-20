import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

//   * When someone presses delete arrow value is NaN so that's why i handle that case
const validateNumber = (num: number) => {
  if (`${num}` === 'NaN') {
    return 0;
  }

  return num;
};

interface FieldNumberProps extends NumberInputProps {
  label: string;
  id: string;
  labelStyle?: FormLabelProps;
  formControlStyle?: FormControlProps;
  helperText?: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
}

// Implement FieldHelper inside formControl
export const FieldNumber: React.FC<FieldNumberProps> = ({
  label,
  labelStyle,
  formControlStyle,
  id,
  helperText,
  disabled,
  ...rest
}) => {
  const [, { value, error, initialValue }, { setValue }] = useField(id);

  return (
    <FormControl isDisabled={disabled} {...formControlStyle}>
      <FormLabel fontWeight={600} {...labelStyle}>
        {label}
      </FormLabel>
      <NumberInput
        defaultValue={initialValue | 5}
        id={id}
        name={id}
        onChange={(_, _value) => setValue(validateNumber(_value))}
        step={1}
        value={validateNumber(value)}
        bg='white'
        {...rest}
      >
        <NumberInputField />
        <NumberInputStepper>
          {!disabled && (
            <>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </>
          )}
        </NumberInputStepper>
      </NumberInput>
      {helperText && (
        <FormHelperText fontSize='xs'>{helperText}</FormHelperText>
      )}
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
