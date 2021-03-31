import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/layout/index';
import { Box, Container, SimpleGrid, GridItem, VStack } from '@chakra-ui/layout';
import QuestionBox from '../../../components/kontes/questionBox';
import NumberBox from '../../../components/kontes/numberBox';
import TimeLeftBox from '../../../components/kontes/timeLeftBox';

export default function QuestionNumber() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, []);

  return (
    <Layout>
      <Container maxW="container.xl" py="2rem">
        <SimpleGrid templateColumns="repeat(12, 1fr)" gap="1rem">
          <GridItem colSpan={8}>
            <QuestionBox />
          </GridItem>
          <GridItem colSpan={4}>
            <VStack spacing="1rem">
              <NumberBox />
              <TimeLeftBox />
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
