import { Flex, Button, Stack, } from '@chakra-ui/react'

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { InputForm } from '../components/form/InputForm';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000)) 
    console.log('values', values)
  }
  
  const { errors } = formState
  console.log('errors', errors)

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360} // 360px
        bg="gray.800"
        p="8" // 32px
        borderRadius={8} // 8px
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
         <InputForm
            name="email"
            label="E-mail"
            type="email" 
            {...register('email')}
            error={errors.email}
          />
         <InputForm
            name="password"
            label="Senha"
            error={errors.password}
            type="password" 
            // {...register('password')}
            {...register('password')}
          />
        </Stack>
       <Button
          type="submit"
          mt={8}
          colorScheme="teal"
          isLoading={formState.isSubmitting}
          >
            Entrar
          </Button >
      </Flex>
    </Flex>
  )
}

// Medida em px:
// p="8" => 8 * 4 = 32 px

// Medida em rem:
// p="8" => 8 / 4 = 2rem
