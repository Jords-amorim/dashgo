import { Icon, Link, Text, LinkProps as ChakraUiInputProps } from '@chakra-ui/react'
import React, { ElementType } from 'react'

interface NavLinkProps extends ChakraUiInputProps {
  title: string;
  icon: ElementType;
}

export default function NavLink({ title, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" href="/dashboard" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{title}</Text>
    </Link>
  )
}
