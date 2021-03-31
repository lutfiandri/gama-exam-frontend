// import { Box } from '@chakra-ui/layout';
import Navbar from './navbar';

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <footer>ini footer</footer>
    </>
  );
}
