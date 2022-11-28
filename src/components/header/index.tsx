import React from 'react'
import { Flex, Text, Icon, Link, useBreakpointValue, IconButton } from '@chakra-ui/react'
import SearchInput from './search-input'
import Profile from './profile'
import Notifications from './notifications'
import { useSideBarDrawer } from '../../context/sideBarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export default function Header() {
    const {onOpen} = useSideBarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    return (
        <Flex
            w="100%"
            as="header"
            maxWidth={1680}
            h="20"
            px="4"
            align="center"
            mx="auto"
            justify="space-between"
        >
            {!isWideVersion ? (
                <IconButton
                  aria-label='OpenNavigation'
                  icon={<Icon/>}
                  as={RiMenuLine}
                  variant="unstyled"
                  onClick={onOpen}
                  mr="2"
                  cursor="pointer"
                >
                    
                </IconButton>
            ) : null}
            <Link href="/dashboard">

                <Text
                    fontSize={["2xl", "3xl"]}
                    fontWeight="bold"
                    letterSpacing="tight"
                    w={["50", "64"]}
                >
                    Dashgo
                    <Text as="span" color="teal.500" ml={2} fontSize="5xl" >.</Text>
                </Text>
            </Link>
            {isWideVersion ? (  <SearchInput />) : null}
          
            <Notifications />         
            <Profile showProfileData={isWideVersion}/>
        </Flex>
    )
}
