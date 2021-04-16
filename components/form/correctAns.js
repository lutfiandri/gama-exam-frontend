import { Flex, Spacer, Text } from '@chakra-ui/react';

const CorrectAns = () => {
  return (
    <Flex width="84rem" mb="0.75rem" mx="1.5rem">
      <Flex direction="column" mr="0.5rem">
        <Text className="questionNumber">1.</Text>
        <Spacer />
        <Text className="answerNumber">A.</Text>
      </Flex>
      <Flex direction="column">
        <Flex className="question">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        </Flex>
        <Text className="answer"> Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
      </Flex>
    </Flex>
  );
};

export default CorrectAns;
