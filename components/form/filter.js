import { Stack, CheckboxGroup, Checkbox, Text } from '@chakra-ui/react';

const Filter = () => {
  return (
    <Stack mt="2rem" width="100%">
      <Text fontWeight="bold">FILTER</Text>
      <CheckboxGroup>
        <Checkbox value="soshum">Sosial Hukum</Checkbox>
        <Checkbox value="saintek">Saintek</Checkbox>
        <Checkbox value="TKA">Tes Kemampuan Akademik</Checkbox>
        <Checkbox value="TPS">Tes Potensi Skolastik</Checkbox>
      </CheckboxGroup>
    </Stack>
  );
};

export default Filter;
