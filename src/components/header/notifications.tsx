import React from 'react'
import {  Icon, HStack } from '@chakra-ui/react'
import { RiNotification3Line, RiUserAddLine } from 'react-icons/ri'

export default function Notifications() {
    return (
        <HStack
            spacing={["6","8"]}
            pr={["6","8"]}
            mx={["6","8"]}
            py="2"
            mr={[1, 5]}
            color="gray.200"
            borderRightWidth={2}
            borderColor="teal.500"
        >
            <Icon as={RiNotification3Line} fontSize={18} />
            <Icon as={RiUserAddLine} fontSize={18} />
        </HStack>
    )
}
