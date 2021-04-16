import { Link, Stack, Text } from '@chakra-ui/react';

const AdminOpt = () => {
  return (
    <Stack>
      <Text fontWeight="bold">ADMINISTRATION</Text>
      <Link href="/">
        <a>Buat Test</a>
      </Link>
      <Link href="/">
        <a>Atur Test</a>
      </Link>
    </Stack>
  );
};

export default AdminOpt;
