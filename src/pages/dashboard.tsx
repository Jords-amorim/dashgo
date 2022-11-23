import React from 'react'
import { Flex} from '@chakra-ui/react'
import Header from '../components/header'
import SideBar from '../components/side-bar'

export default function Dashboard() {
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

        </Flex>
    </Flex>
  )
}
