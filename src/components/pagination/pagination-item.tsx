import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react'

interface PaginationItemProps extends ButtonProps {
    isCurrent?: boolean;
    pageNumber: number;
}

export default function PaginationItem({ 
    isCurrent = false, // como é opcional é interessante adicionar um valor default
    pageNumber 
}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                w="4"
                colorScheme="teal"
                disabled={isCurrent}
                _disabled={{
                    bg: 'teal.500',
                    cursor: 'default'
                }}
            >
                {pageNumber}
            </Button>
        )
    }
    return (
        <Button
            size="sm"
            w="4"
            bg="gray.600"
            _hover={{
                bg: 'teal.500'
            }}
        >
            {pageNumber}
        </Button>
    )
}
