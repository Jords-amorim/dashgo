import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import React, { useRef, useState } from 'react'

export default function SearchInput() {
    
    // Controlled Components
    // const [search, setSearch] = useState('')

    // UnControlled Components
    // const searchInputRef = useRef<HTMLInputElement>(null)
    // console.log(searchInputRef.current?.value)

    return (
        <Flex
            as="label"
            // colocamos como label pra se clicar no ícone também receberá o foco
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            bg="gray.800"
            borderRadius="full"
            position="relative"
            alignSelf="center"
        >
            <Input
                color="teal.400"
                variant="unstyled"
                placeholder="buscar na plataforma"
                _placeholder={{ color: "gray.400" }}

                // Controlled Components
                // value={search}
                // onChange={event => setSearch(event.target.value)}

                // UnControlled Components
                // ref={searchInputRef}
            />
            <Icon as={RiSearchLine} fontSize={16} color="gray.300" />
        </Flex>
    )
}


/*
    debounce
    chama a requisição apenas quando o usuário parar de digitar
*/

/* Formas de fazer formulário no React 

  1 - Controlled components
    - Não é ruim, é apenas trabalhosa;
    - não da problema de performace;

    controlled components =>  
      - é quando você controla cada digitação e armazena esse dado em um estdado;
      
  2 - UnControlled components
    - não armazena o valor em uma variável no estado;
    - Acessamos o valor do input apenas no momento em que precisarmos;
    
    Para acessarmos no React utilizamos os refs

  3 - Bibliotecas:
    - formik
    - react hook form
    


    ** REACT HOOK FORM **
    tem uma facilidade maior utilizando nossos próprios elementos
    basiado na ideia de uncontrolled form
*/