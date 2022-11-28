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
  Tr,
  useBreakpointValue
} from '@chakra-ui/react'
import SideBar from '../../components/side-bar'
import Header from '../../components/header'
import { RiAddLine } from 'react-icons/ri'
import TableItem from '../../components/table/table-item'
import Pagination from '../../components/pagination'

export default function Usuarios() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  })
  return (
    <Flex flexDir="column" h="100vh" >
      <Header />
      <Flex
        w="100%"
        my={["4","6"]}
        mx="auto"
        px="6"
        maxWidth={1480}
        flex="1"
      >
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p={["4","8"]} >

          {/* Cabeçalho Listagem */}
          <Flex mb={["4","8"]} justify="space-between" align="center" flex="1" >
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              href="usuarios/criar"
              leftIcon={<Icon
                as={RiAddLine}
                fontSize={20} />}
              _hover={{ cursor: "pointer" }}
              size="sm"
              colorScheme="teal"
            >
              Criar Usuário
            </Button>
          </Flex>

          {/* Listagem de usuários */}
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["2","6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="teal" />
                </Th>
                <Th fontSize="md" color="gray.400">
                  Usuário
                </Th>

                {isWideVersion ? (
                  <Th fontSize="md" color="gray.400">
                  Data de cadastro
                </Th>
                ) : null}
                 <Th w={4} />
              </Tr>
            </Thead>

            <TableItem userName="Joane Alves" registrationDate="23.11.2022" />
            <TableItem userName="Jords Amorim" registrationDate="25.11.2022" />
          </Table>

          {/* Paginação */}
          <Pagination />

        </Box>
      </Flex>
    </Flex>
  )
}
