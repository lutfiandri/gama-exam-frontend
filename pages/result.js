import { Flex, Text } from '@chakra-ui/react';
import UserCard from '../components/form/userCard';
import CorrectAns from '../components/form/correctAns';
import Layout from '../components/layout';

const Result = () => {
  return (
    <Layout>
      <Flex direction="column">
        <UserCard />
        <Flex direction="column" width="90rem" background="white" pd={3} alignItems="Left" borderRadius={10}>
          <Text fontSize="xl" ml="1.5rem" my="1.5rem">
            Jawaban yang Benar
          </Text>
          <CorrectAns />
          <CorrectAns />
          <CorrectAns />
          <CorrectAns />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Result;
