import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/layout/index';
import { Box, Container, SimpleGrid, GridItem, VStack, HStack, Spacer } from '@chakra-ui/layout';
import QuestionBox from '../../../components/kontes/questionBox';
import NumberBox from '../../../components/kontes/numberBox';
import TimeLeftBox from '../../../components/kontes/timeLeftBox';
import SubmitButton from '../../../components/kontes/submitButton';
import NextButton from '../../../components/kontes/nextButton';
import PrevButton from '../../../components/kontes/prevButton';

export default function QuestionNumber() {
  const router = useRouter();
  const questionNumber = Number(router.query.questionNumber);
  const maxQuestionNumber = 10;

  useEffect(() => {
    console.log(router.query);
  }, []);

  return (
    <Layout>
      <Container maxW="container.xl" py="2rem">
        <SimpleGrid templateColumns="repeat(12, 1fr)" gap="1rem">
          <GridItem colSpan={8}>
            <VStack spacing="1rem">
              <QuestionBox />
              <HStack w="100%">
                {questionNumber > 1 && <PrevButton />}
                <Spacer />
                {questionNumber < maxQuestionNumber && <NextButton />}
              </HStack>
            </VStack>
          </GridItem>
          <GridItem colSpan={4}>
            <VStack spacing="1rem">
              <NumberBox />
              <TimeLeftBox />
              <SubmitButton />
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
