import React from 'react'
import { Flex, Text, Icon, Input, Box, HStack, Avatar} from '@chakra-ui/react'
import { RiNotification3Line, RiSearchLine, RiUserAddLine} from 'react-icons/ri'

export default function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      px="4"
      align="center"
      >
        <Text
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing="tight"
          w="64"
          >
            Dashgo
            <Text as="span" color="teal.500" ml={2} fontSize="5xl">.</Text>
          </Text>
          <Flex
            as="label" 
            // colocamos como label pra se clicar no ícone também receberá o foco
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            bg="gray.800"
            borderRadius="full"
            position="relative"
            alignSelf="center"
          >
            <Input
              color="teal.400"
              variant="unstyled"
              placeholder="buscar na plataforma"
              _placeholder={{color: "gray.400"}}
            />
            <Icon as={RiSearchLine} fontSize={16} color="gray.300"/>
          </Flex>
            <HStack
              spacing={8}
              align="center"
              ml="auto"
              pr="8"
              py="1"
              mr={5}
              color="gray.200"
              borderRightWidth={2}
              borderColor="teal.500"
            >
              <Icon as={RiNotification3Line} fontSize={18}/>
              <Icon as={RiUserAddLine} fontSize={18}/>
            </HStack>
            <Flex align="center" >
              <Box textAlign="right" mr={4}>
                <Text>Jords Amorim</Text>
                <Text fontSize="small" color="gray.400">jordana_amorim@hotmail.com</Text>
              </Box>
              <Avatar 
                name="Jords Amorim" 
                //caso não tenha um src, irá adicionar as iniciais
                src="https://github.com/Jords-amorim.png"
              />
            </Flex>
      </Flex>
  )
}
