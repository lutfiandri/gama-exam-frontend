import { Button } from '@chakra-ui/react';

export default function NavbarButton(props) {
  return (
    <Button
      {...props}
      p={2}
      variant="link"
      color="white"
      fontWeight={400}
      _active={{
        color: 'gray.300',
      }}
      _focus={{
        boxShadow: 'none',
      }}>
      {props.children}
    </Button>
  );
}
