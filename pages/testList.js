import CardTest from '../components/form/cardTest';
import AdminOpt from '../components/form/adminOpt';
import Filter from '../components/form/filter';
import { Flex, Text, VStack } from '@chakra-ui/react';
import Layout from '../components/layout';

const TestList = () => {
  return (
    <Layout>
      <Flex direction="column">
        <Flex mb={10}>
          <Text fontSize="4xl" fontWeight="semibold">
            Daftar Test
          </Text>
        </Flex>
        <Flex width="100%">
          <Flex direction="column" spacing="2rem">
            <Flex direction="column">
              <Text fontSize="3xl" fontWeight="bold">
                Test Aktif
              </Text>
              <VStack spacing="1.5rem">
                <CardTest />
                <CardTest />
              </VStack>
            </Flex>
            <Flex direction="column" mt="2rem">
              <Text fontSize="3xl" fontWeight="bold">
                Test Archieve
              </Text>
              <VStack spacing="1.5rem">
                <CardTest />
                <CardTest />
              </VStack>
            </Flex>
          </Flex>
          <Flex direction="column" ml="5rem" mt="3rem">
            <AdminOpt />
            <Filter></Filter>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default TestList;
