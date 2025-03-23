import { UnlockIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, HStack, Spacer, Text, useToast } from '@chakra-ui/react';
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
      <Box bg='grey.200' p='10px'>M</Box>
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
