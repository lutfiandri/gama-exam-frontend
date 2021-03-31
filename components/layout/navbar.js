import { Button } from '@chakra-ui/button';
import { Spacer } from '@chakra-ui/layout';
import { Box, Center, Container, HStack } from '@chakra-ui/layout';
import { HiOutlineLogout } from 'react-icons/hi';

export default function Navbar() {
  return (
    <Box as="header" bg="teal.900" color="white">
      <Container maxW="container.xl" as={HStack}>
        <Center p={2} fontWeight={700}>
          GamaExam
        </Center>
        <Button p={2} variant="link" color="white" fontWeight={400}>
          Kontes
        </Button>
        <Button p={2} variant="link" color="white" fontWeight={400}>
          Rapor
        </Button>
        <Spacer />
        <Button p={2} variant="link" color="white" fontWeight={400} rightIcon={<HiOutlineLogout />}>
          Keluar
        </Button>
      </Container>
    </Box>
  );
}
