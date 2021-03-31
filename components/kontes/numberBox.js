import { Box, Center, Heading, SimpleGrid, VStack } from '@chakra-ui/layout';
import SingleNumber from './singleNumber';

export default function NumberBox() {
  return (
    <VStack borderRadius="xl" boxShadow="xl" bg="white" w="100%" p="2rem">
      <Heading as="h2" fontSize="xl" fontWeight={700}>
        Daftar Soal
      </Heading>
      <SimpleGrid columns={5} w="100%">
        <SingleNumber answered>1</SingleNumber>
        <SingleNumber answered>2</SingleNumber>
        <SingleNumber>3</SingleNumber>
        <SingleNumber>4</SingleNumber>
        <SingleNumber>5</SingleNumber>
        <SingleNumber>6</SingleNumber>
        <SingleNumber>7</SingleNumber>
        <SingleNumber>8</SingleNumber>
        <SingleNumber>9</SingleNumber>
        <SingleNumber>10</SingleNumber>
      </SimpleGrid>
    </VStack>
  );
}
