import React from 'react'

import {
    Button,
    Checkbox,
    Icon,
    Tbody,
    Td,
    Text,
    Tr,
    useBreakpointValue
} from '@chakra-ui/react'

import { RiPencilLine } from 'react-icons/ri'

interface TableItemProps {
    userName: string;
    registrationDate: string;
}

export default function TableItem({ userName, registrationDate }: TableItemProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: true,
    })
    return (
        <Tbody>
            <Tr>
                <Td px={["2","6"]}>
                    <Checkbox colorScheme="teal" />
                </Td>
                <Td>
                    <Text fontWeight="bold">
                        {userName}
                    </Text>
                </Td>
                {isWideVersion ? (
                     <Td>
                     <Text>
                         {registrationDate}
                     </Text>
                 </Td>
                ) : null}
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
