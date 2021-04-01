import { Button } from '@chakra-ui/button';
import { Spacer } from '@chakra-ui/layout';
import { Box, Center, Container, HStack } from '@chakra-ui/layout';
import { HiOutlineLogout } from 'react-icons/hi';
import NavbarButton from './navbarButton';

export default function Navbar() {
  return (
    <Box as="header" bg="teal.900" color="white" position="fixed" top="0" width="100%" zIndex="10000">
      <Container maxW="container.xl" as={HStack}>
        <Center p={2} fontWeight={700}>
          GamaExam
        </Center>
        <NavbarButton>Rapor</NavbarButton>
        <NavbarButton>Kontes</NavbarButton>
        <Spacer />
        <NavbarButton rightIcon={<HiOutlineLogout />}>Keluar</NavbarButton>
      </Container>
    </Box>
  );
}
