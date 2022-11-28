import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface ProfileProps {
    showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {

    return (
        <Flex align="center" >
            {showProfileData ? (
                <Box textAlign="right" mr={4}>
                    <Text>Jords Amorim</Text>
                    <Text fontSize="small" color="gray.400">jordana_amorim@hotmail.com</Text>
                </Box>
            ) : null}
            <Avatar
                src="https://github.com/Jords-amorim.png"
                //caso não tenha um src, irá adicionar as iniciais
                name="Jords Amorim"
            />
        </Flex>
    )
}
