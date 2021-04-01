import { Box, Heading, Divider, VStack } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import Answers from './answers';
import Question from './question';

export default function QuestionBox() {
  const router = useRouter();
  const { questionNumber } = router.query;

  return (
    <Box borderRadius="xl" boxShadow="xl" bg="white">
      <Box p="2rem">
        <Heading as="h1" fontWeight={700} fontSize="2xl" color="teal.900">
          TPS - Penanaran Umum
        </Heading>
        <Heading as="h2" fontWeight={400} fontSize="4xl" color="green.400">
          Soal No. {questionNumber}
        </Heading>
      </Box>
      <Divider />
      <Box p="2rem">
        <Question />
        <Answers />
      </Box>
    </Box>
  );
}
