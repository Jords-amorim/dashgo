import React from 'react'

import { 
    Box, 
    Button,
    Divider, 
    Flex, 
    Heading, 
    HStack, 
    SimpleGrid, 
    VStack
  } from '@chakra-ui/react'
import Header from '../../components/header'
import SideBar from '../../components/side-bar'
import { InputForm } from '../../components/form/InputForm'
import { SubmitHandler, useForm } from 'react-hook-form'

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type CreateUserProps = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password') //ref serva para referenciar outro elemento que esteja no yup
  ], 'As senhas precisam ser iguais'),
  // active: yup.string().oneOf(['active', 'canceled']),
});

export default function Criar() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserProps> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('values', values)
  }

  const { errors } = formState
  return (
    <Flex flexDir="column" h="100vh">
    <Header />
    <Flex
      w="100%"
      my="6"
      mx="auto"
      px="6"
      maxWidth={1480}
    >
      <SideBar />
      <Box
        flex="1"
        borderRadius={8}
        bg="gray.800"
        p={["4","8"]}
        as="form"
        onSubmit={handleSubmit(handleCreateUser as any )}
      >
        <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
        <Divider my="2" borderColor="teal.500" />
        <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <InputForm
                  label="Nome Completo"
                  error={errors.name}
                  {...register('name')} 
                />
                <InputForm
                  label="E-mail"
                  type="email"
                  error={errors.email}
                  {...register('email')} 
                />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
               <InputForm
                  label="Senha"
                  type="password"
                  error={errors.password}
                  {...register('password')} 
                />
                <InputForm
                  label="Confirmar Senha"
                  type="password"
                  error={errors.password_confirmation} 
                  {...register('password_confirmation')} 
                />
            </SimpleGrid>
        </VStack>
        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Button as="a" colorScheme="whiteAlpha" href="/usuarios">Cancelar</Button>
            <Button type="submit" colorScheme="teal" w="24" isLoading={formState.isSubmitting}>Salvar</Button>
          </HStack>
        </Flex>
      </Box>
      
    </Flex>
</Flex>
  )
}
