import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext } from 'react';

interface SideBarDrawerProviderProps {
    children: ReactNode,
}

type SideBarDrawerContextData = UseDisclosureReturn
const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({ children }: SideBarDrawerProviderProps) {
    const disclosure = useDisclosure()
    return(
        <SideBarDrawerContext.Provider value={disclosure} >
            {children}
        </SideBarDrawerContext.Provider>
    )
}

// criar um hook para não precisar o hook do react
export const useSideBarDrawer = () => useContext(SideBarDrawerContext)