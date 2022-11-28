import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { Input, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form';

interface FormProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

// export  default function InputForm ({ name, label, ...rest }: FormProps) {

// Ajusta para encaminhamento de ref
const InputBase: ForwardRefRenderFunction<HTMLInputElement, FormProps> 
  = ({ name, label, error = null, ...rest }, ref) => {
  return (
    // <FormControl>
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input
        name={name}
        id={name} //consegui referenciar a formlabel
        focusBorderColor="teal.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        ref={ref}
        {...rest}
      />

      {!!error ? (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      ) : null}
      
    </FormControl>
  )
}
// Encaminhamento de ref
// ao fazer o encaminhamento de ref eu preciso tornar meu componente paara const
export const InputForm = forwardRef(InputBase)

// InputProps - tras todas as propriedades default do Inputs

