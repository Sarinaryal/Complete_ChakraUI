import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyles = {
    p: '10px',
    bg: "lightgreen",
    color: 'white',
    textAlign: 'center',
    filter: 'blur(2px)',
    ':hover': {
      color: 'black',
      bg: 'lightblue'
    }
  }
  return (
    <Container as='section' maxWidth='md' py='20px'>
      <Heading my='30px' p='10px'>Chakra UI Components</Heading>
      <Text ml = '40px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa fugit libero voluptatum et modi? Facere exercitationem et libero expedita magnam!</Text>

      <Text ml = '40px' color='blue.500' fontWeight='bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa fugit libero voluptatum et modi? Facere exercitationem et libero expedita magnam!</Text>

      <Box my='10px' p='20px' bg='lightpink' color='white'>This is a box</Box>

      {/* passing object in sx prop named boxStyles */}
      <Box sx={boxStyles}>Hello!, Its me Sarina.</Box>
    </Container>
  )
}
