import { Button, Flex, Text } from '@chakra-ui/react';

const cardTest = () => {
  return (
    <Flex width="75rem" height="5rem" background="white" pd={3} alignItems="center" borderRadius={10}>
      <Text className="testName" flex="1" ml="2rem" fontSize="xl">
        UTBK tahun 2021
      </Text>
      <Flex flex="1" alignItems="center">
        <Text className="testInfo" flex="2">
          Dibuka untuk selamanya
        </Text>
        <Text className="testTime" flex="1">
          120 menit
        </Text>
        <Button className="testEnter" width="10rem" mr="2rem">
          Masuk Test
        </Button>
      </Flex>
    </Flex>
  );
};

export default cardTest;
