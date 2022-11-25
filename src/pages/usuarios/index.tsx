import React from 'react'
import { 
  Box, 
  Button,
  Checkbox, 
  Flex, 
  Heading, 
  Icon, 
  Table, 
  Tbody, 
  Td, Th, 
  Thead, 
  Tr 
} from '@chakra-ui/react'
import SideBar from '../../components/side-bar'
import Header from '../../components/header'
import { RiAddCircleFill, RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function Usuarios() {
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
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
              </Heading>
             <Button
                as="a"
                colorScheme="teal"
                leftIcon={<Icon
                as={RiAddLine}
                fontSize={20}/>}
                _hover={{cursor: "pointer"}}
                href="usuarios/criar"
              >
                Criar Usuário
              </Button>
            </Flex>

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px="6" color="gray.300" w="8">
                    <Checkbox colorScheme="teal"/>
                  </Th>
                  <Th fontSize="md" color="gray.400">
                    Usuário
                  </Th>
                  <Th fontSize="md" color="gray.400">
                    Data de cadastro
                  </Th>
                  <Th w={4} />
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px="6">
                    <Checkbox  colorScheme="teal"/>
                  </Td>
                  <Td>
                    Joane Alves
                  </Td>
                  <Td>
                    23.11.2022
                  </Td>
                  <Td>
                  <Button
                    as="a"
                    colorScheme="blue"
                    leftIcon={<Icon
                    as={RiPencilLine}
                    fontSize={18}/>}
                    _hover={{cursor: "pointer"}}
                  >
                    Editar
                  </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Flex>
    </Flex>
  )
}
