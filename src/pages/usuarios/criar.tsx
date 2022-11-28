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
import InputForm from '../../components/form/InputForm'

export default function Criar() {
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
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
        <Divider my="2" borderColor="teal.500" />
        <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <InputForm name="name" label="Nome Completo"/>
                <InputForm name="email" label="E-mail" type="email"/>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <InputForm name="password" label="Senha" type="password"/>
                <InputForm name="password-confirmation" label="Confirmar Senha" type="email"/>
            </SimpleGrid>
        </VStack>
        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Button as="a" colorScheme="whiteAlpha" href="/usuarios">Cancelar</Button>
            <Button colorScheme="teal" w="24">Salvar</Button>
          </HStack>
        </Flex>
      </Box>
      
    </Flex>
</Flex>
  )
}
