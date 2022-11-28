import { HStack } from '@chakra-ui/react'
import React from 'react'
import PaginationItem from './pagination-item'

export default function Pagination() {
  return (
    <HStack direction="row" mt="8" justify="center" align="center">
      <PaginationItem isCurrent pageNumber={1}/>
      <PaginationItem pageNumber={2}/>
      <PaginationItem pageNumber={3}/>
      <PaginationItem pageNumber={4}/>
    </HStack>
  )
}
