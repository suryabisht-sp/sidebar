import React from 'react'
import { HStack,Box, Flex, Text, Avatar, AvatarBadge, Heading, Button, Spacer } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Flex as="nav" p="10px" w="full" alignItems="center" gap="4px" flexDirection={{ base: 'column', md: 'row' }}>
      <Heading as="h1">Logo</Heading>
      {/* <Flex gap="10px">

      <Text as="h2">Home</Text>
      <Text as="h2">Product</Text>
      <Text as="h2">Control</Text>
      </Flex> */}
      <Spacer />
      <HStack spacing="10px">
        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence'>
          <AvatarBadge borderColor='white' bg='papayawhip' boxSize='1.25em'>
            <Text fontSize="8px">Hi</Text>
          </AvatarBadge>
        </Avatar>
        <Text bg='gray.400' p="8px" borderRadius={10} color="#FFF">test@test.com</Text>
        <Button colorScheme='orange'>Logout</Button>
      </HStack>
    </Flex>
  )
}

export default Navbar