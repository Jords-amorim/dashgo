import { Box, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavSectionProps {
  children: ReactNode;
  titleSection: string;

}
export default function NavSection({ titleSection, children }: NavSectionProps) {
  return (
    <Box>
      <Text color="gray.400">{titleSection}</Text>
      <Stack spacing="4" mt="6" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
