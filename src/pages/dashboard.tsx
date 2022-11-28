import React from 'react'
import { Box, Flex, SimpleGrid, Text, theme} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Header from '../components/header'
import SideBar from '../components/side-bar'
import { options } from '../helpers'

// dynamic irá fazer com que o Chart rode apenas no browser
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false, // significa que o server side rendering está desligado
})

const series = [
  {name: 'series1', data: [31, 120, 10, 28]}
];

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
         <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
          >
            <Box p={["6","8"]} bg="gray.800" borderRadius={8}>
              <Text mb="4">Inscritos da Semana</Text>
              <Chart
                  type="area"
                  height={160}
                  options={options}
                  series={series} 
                />
            </Box>
            <Box p={["6","8"]} bg="gray.800" borderRadius={8}>
              <Text mb="4">Taxa de abertura</Text>
              <Chart
                type="area"
                height={160}
                options={options}
                series={series} 
              />
            </Box>
          </SimpleGrid>
        </Flex>
    </Flex>
  )
}
