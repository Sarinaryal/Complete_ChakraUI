import { UnlockIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Box, Button, Flex, Heading, HStack, Spacer, Text, useToast } from '@chakra-ui/react';
import React from 'react'

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon/>
    })
  } 
  return (
    <Flex as='nav' p='10px' mb='40px' alignItems='center'>
      <Heading as='h1'>ChakraUI</Heading>

      <Spacer/>
      {/* Hstack works as gap between items */}
      <HStack spacing='20px'>
        <Avatar name='Sario' bg='purple' src="/img/mario.png">
          <AvatarBadge width='1.3em' bg='teal.500'>
            <Text fontSize="xs" color='white'>3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>About Us</Text>
        <Button colorScheme='purple' onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>

    // <Flex bg='grey' justify='space-between' wrap='wrap' gap='2'>
    //   <Box w='150px' h='50px' bg ='pink'>1</Box>
    //   <Box w='150px' h='50px' bg ='blue'>2</Box>
    //   <Box w='150px' h='50px' bg ='green' flexGrow='1'>3</Box>
    //   <Box w='150px' h='50px' bg ='yellow' flexGrow='2'>4</Box>
      
    // </Flex>
  )
}
