import React from 'react'

import {
    Button,
    Checkbox,
    Icon,
    Tbody,
    Td,
    Text,
    Tr
} from '@chakra-ui/react'

import { RiPencilLine } from 'react-icons/ri'

interface TableItemProps {
    userName: string;
    registrationDate: string;
}

export default function TableItem({ userName, registrationDate }: TableItemProps) {
    return (
        <Tbody>
            <Tr>
                <Td px="6">
                    <Checkbox colorScheme="teal" />
                </Td>
                <Td>
                    <Text fontWeight="bold">
                        {userName}
                    </Text>
                </Td>
                <Td>
                    <Text>
                        {registrationDate}
                    </Text>
                </Td>
                <Td>
                    <Button
                        // as="a"
                        leftIcon={<Icon
                            as={RiPencilLine}
                            fontSize={18} />}
                        _hover={{ cursor: "pointer", bg: "gray.400", border: "none", color: "gray.900" }}
                        variant="outline"
                        color="gray.300"
                    >
                        Editar
                    </Button>
                </Td>
            </Tr>
        </Tbody>
    )
}
