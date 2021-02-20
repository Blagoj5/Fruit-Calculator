import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  Switch,
  SwitchProps,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

interface FieldSwitchProps extends SwitchProps {
  label: string;
  id: string;
  labelStyle?: FormLabelProps;
  formControlStyle?: FormControlProps;
  helperText?: string;
}

export const FieldSwitch: React.FC<FieldSwitchProps> = ({
  label,
  labelStyle,
  formControlStyle,
  id,
  helperText,
  ...rest
}) => {
  const [field, { error }] = useField(id);
  return (
    <FormControl d='flex' alignItems='center' {...formControlStyle}>
      <FormLabel htmlFor={id} {...labelStyle}>
        {label}
      </FormLabel>
      <Switch
        {...field}
        colorScheme='primary'
        size='lg'
        id={id}
        name={id}
        {...rest}
      />
      {helperText && (
        <FormHelperText fontSize='xs'>{helperText}</FormHelperText>
      )}
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
