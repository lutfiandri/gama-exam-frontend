import { Center, Heading, VStack, Text } from '@chakra-ui/layout';

export default function TimeLeftBox() {
  return (
    <VStack borderRadius="xl" boxShadow="xl" bg="white" w="100%" p="2rem">
      <Heading as="h2" fontSize="xl" fontWeight={700}>
        Sisa Waktu
      </Heading>
      <Center w="100%">
        <Text fontSize="5xl" lineHeight="shorter">
          9:59
        </Text>
      </Center>
    </VStack>
  );
}
