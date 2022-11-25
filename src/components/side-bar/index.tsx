import React from 'react'
import { Box, Text, Stack, Icon, Link } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import NavLink from './nav-link'
import NavSection from './nav-section'

export default function SideBar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">

                <NavSection titleSection="GERAL">
                    <NavLink href="/dashboard" title="Dashboard" icon={RiDashboardLine} />
                    <NavLink href="/usuarios" title="Usuários" icon={RiContactsLine} />
                </NavSection>

                <NavSection titleSection="AUTOMAÇÃO">
                    <NavLink href="/" title="Formulários" icon={RiInputMethodLine} />
                    <NavLink href="/" title="Automação" icon={RiGitMergeLine} />
                </NavSection>

            </Stack>
        </Box>
    )
}
