import { useRadioGroup } from '@chakra-ui/react';
import { Box, HStack, Stack } from '@chakra-ui/react';
import SingleAnswer from './singleAnswer';

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export default function Answers() {
  // dummy data
  const options = [
    {
      char: 'A',
      text:
        'scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    },
    {
      char: 'B',
      text:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      char: 'C',
      text: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
    },
    {
      char: 'D',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      char: 'E',
      text:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'option',
    // defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Stack {...group} spacing="1rem">
      {options.map((option) => {
        const radio = getRadioProps({ value: option.text });
        return <SingleAnswer key={option.char} {...radio} answer={option} />;
      })}
    </Stack>
  );
}
