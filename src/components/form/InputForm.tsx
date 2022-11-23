import React from 'react'
import { Input, FormLabel, FormControl, InputProps as ChakraInputProps} from '@chakra-ui/react'

interface FormProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export default function InputForm({ name, label, ...rest }: FormProps) {
  return (
    <FormControl>
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
        {...rest}
      />
    </FormControl>
  )
}

// InputProps - tras todas as propriedades default do Inputs
