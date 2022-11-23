import { Flex, Button, Stack, } from '@chakra-ui/react'
import InputForm from '../components/form/InputForm'

export default function SignIn() {
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
      >
        <Stack spacing={4}>
          <InputForm label="E-mail" name="email" type="email"/>
          <InputForm label="Senha" name="password" type="password"/>
        </Stack>
        <Button type="submit" mt={8} colorScheme="teal">Entrar</Button>
      </Flex>
    </Flex>
  )
}

// Medida em px:
// p="8" => 8 * 4 = 32 px

// Medida em rem:
// p="8" => 8 / 4 = 2rem
