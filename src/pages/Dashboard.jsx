import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {

  return(
    
    <SimpleGrid p='10px' spacing={10} minChildWidth='250px'>
      <Box bg='white' h='200px' border='1px solid'>
        <Text color={{ base: 'green', md : 'blue', lg : 'pink'}} fontSize={{base: '30pxpx', md : '20px', lg : '40px'}}>Responsive Text</Text>
      </Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

    </SimpleGrid>
  )

  // const boxStyles = {
  //   p: '10px',
  //   bg: "lightgreen",
  //   color: 'white',
  //   textAlign: 'center',
  //   filter: 'blur(2px)',
  //   ':hover': {
  //     color: 'black',
  //     bg: 'lightblue'
  //   }
  // }
  // return (
  //   <Container as='section' maxWidth='md' py='20px'>
  //     <Heading my='30px' p='10px'>Chakra UI Components</Heading>
  //     <Text ml = '40px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa fugit libero voluptatum et modi? Facere exercitationem et libero expedita magnam!</Text>

  //     <Text ml = '40px' color='blue.500' fontWeight='bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa fugit libero voluptatum et modi? Facere exercitationem et libero expedita magnam!</Text>

  //     <Box my='10px' p='20px' bg='lightpink' color='white'>This is a box</Box>

  //     {/* passing object in sx prop named boxStyles */}
  //     <Box sx={boxStyles}>Hello!, Its me Sarina.</Box>
  //   </Container>
  // )
}
