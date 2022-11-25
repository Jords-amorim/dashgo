import React from 'react'
import { Flex, Text, Icon, Input, Box, HStack, Avatar, Link } from '@chakra-ui/react'
import { RiNotification3Line, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
import SearchInput from './search-input'
import Profile from './profile'
import Notifications from './notifications'

export default function Header() {
    return (
        <Flex
            w="100%"
            as="header"
            maxWidth={1680}
            h="20"
            px="4"
            align="center"
            mx="auto"
        >
            <Link href="/dashboard">

                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    letterSpacing="tight"
                    w="64"
                >
                    Dashgo
                    <Text as="span" color="teal.500" ml={2} fontSize="5xl" >.</Text>
                </Text>
            </Link>
            
            <SearchInput />
            <Notifications />         
            <Profile />
        </Flex>
    )
}
