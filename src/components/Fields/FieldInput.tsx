import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';
import { InputHTMLAttributes } from 'react';

type FieldInputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelStyle?: FormLabelProps;
  formControlStyle?: FormControlProps;
  name: string;
  label: string;
  turnOffAutoComplete?: boolean;
  required?: boolean;
  helperText?: string;
} & InputProps;

const FieldInput: React.FC<FieldInputProps> = ({
  labelStyle,
  formControlStyle,
  turnOffAutoComplete,
  required,
  label,
  size: _,
  style,
  helperText,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl
      isInvalid={!!error}
      isRequired={required}
      {...formControlStyle}
    >
      <FormLabel htmlFor={props.name} fontWeight={600} {...labelStyle}>
        {label}{' '}
      </FormLabel>
      <Input
        {...field}
        id={props.name}
        autoComplete={turnOffAutoComplete ? 'off' : 'on'}
        bg='white'
        {...props}
      />
      {helperText && (
        <FormHelperText fontSize='xs'>{helperText}</FormHelperText>
      )}
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default FieldInput;
