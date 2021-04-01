import { Box } from '@chakra-ui/layout';
import Navbar from './navbar/navbar';

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <Box minH="100vh" bg="gray.50" pt="2.5rem">
        {/* <Box> */}
        <main>{props.children}</main>
      </Box>
      {/* <footer>ini footer</footer> */}
    </>
  );
}
