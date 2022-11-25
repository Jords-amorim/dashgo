import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Profile() {
    return (
        <Flex align="center" >
            <Box textAlign="right" mr={4}>
                <Text>Jords Amorim</Text>
                <Text fontSize="small" color="gray.400">jordana_amorim@hotmail.com</Text>
            </Box>
            <Avatar
                src="https://github.com/Jords-amorim.png"
                //caso não tenha um src, irá adicionar as iniciais
                name="Jords Amorim"
            />
        </Flex>
    )
}
