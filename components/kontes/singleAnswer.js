import { Box, HStack, useRadio } from '@chakra-ui/react';
import { useEffect } from 'react';

// 1. Create a component that consumes the `useRadio` hook
export default function SingleAnswer(props) {
  useEffect(() => {
    console.log('single answer props');
    console.log(props);
  }, []);

  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <HStack as="label" width="fit-content" cursor="pointer">
      <input {...input} />
      <Box
        {...checkbox}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        fontWeight={600}
        _checked={{
          bg: 'teal.900',
          color: 'white',
          borderColor: 'teal.900',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}>
        {props.answer.char}
      </Box>
      <Box>{props.answer.text}</Box>
    </HStack>
  );
}
