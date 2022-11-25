import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import React from 'react'

export default function SearchInput() {
    return (
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
                _placeholder={{ color: "gray.400" }}
            />
            <Icon as={RiSearchLine} fontSize={16} color="gray.300" />
        </Flex>
    )
}
