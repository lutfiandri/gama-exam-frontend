import Layout from '../../../components/layout/index';
import {
  Box,
  Container,
  SimpleGrid,
  GridItem,
  VStack,
  HStack,
  Spacer,
  Heading,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/layout';
import { Input, RadioGroup, Radio, Textarea, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'next/link';
import axios from 'axios';

export default function CreateQuestionNumber() {
  const [radioValue, setRadioValue] = useState('1');
  const [contest, setContest] = useState({});
  const [question, setQuestion] = useState({});
  const [nums, setNums] = useState([]);

  const router = useRouter();

  // GET Contest => contest
  useEffect(() => {
    if (router.isReady) {
      axios({
        method: 'get',
        url: `https://localhost:44393/api/contests/${router.query.kontesId}`,
      })
        .then((response) => {
          setContest(response.data);
          // fill nums [1, 2, 3, ... contest.numOfQuestion]
          setNums(Array.from({ length: response.data.numOfQuestion }, (_, index) => index + 1));
        })
        .catch((err) => console.log(err.message));
    }
  }, [router]);

  // GET Question => question
  useEffect(() => {
    if (router.isReady) {
      axios({
        method: 'get',
        url: `https://localhost:44393/api/questions/contest/${router.query.kontesId}`,
      })
        .then((response) => {
          const questions = response.data;
          const question = questions.filter((q) => q.questionNumber == router.query.createQuestionNumber)[0];
          setQuestion(question);
          console.log('question', question);

          setRadioValue(`${question.trueAnswer}`);
        })
        .catch((err) => console.log(err.message));
    }
  }, [router]);

  // EVENT HANDLERS
  const questionChangeHandler = (e, key) => {
    setQuestion({
      ...question,
      [key]: e.target.value,
    });
  };

  const saveHandler = (e) => {
    e.preventDefault();
    axios({
      method: 'put',
      url: `https://localhost:44393/api/questions/${question.id}`,
      data: {
        id: question.id,
        questionNumber: question.questionNumber,
        questionText: question.questionText,
        answers_A: question.answers_A,
        answers_B: question.answers_B,
        answers_C: question.answers_C,
        answers_D: question.answers_D,
        answers_E: question.answers_E,
        trueAnswer: Number(radioValue),
        contestId: question.contestId,
      },
    })
      .then((response) => {
        if (response.status === 204) {
          alert('Berhasil menyimpan soal');
        } else {
          alert('Terjadi kesalahan pada server. Gagal menyimpan perubahan soal');
        }
      })
      .catch(() => alert('Terjadi kesalahan pada server. Gagal menyimpan perubahan soal'));
  };

  const navigationHandler = (e, num) => {
    e.preventDefault();
    router.push(`/buatKontes/${contest.id}/${num}`);
  };

  return (
    <Layout>
      <Container maxW="container.xl" py="2rem">
        <Stack w="100%">
          {/* <Heading as="h1">
            <Link href={`/buatKontes/${contest.id}`}>
              <a>Kontes: {contest?.title}</a>
            </Link>
          </Heading> */}

          <Heading as="h1">Kontes: {contest?.title}</Heading>

          <Heading as="h2" size="md">
            Soal Nomor: {question?.questionNumber}
          </Heading>
          <Textarea
            placeholder="Tulis pertanyaan..."
            size="md"
            value={question?.questionText}
            onChange={(e) => questionChangeHandler(e, 'questionText')}
          />

          <Heading as="h2" size="md">
            Jawaban Benar
          </Heading>
          <RadioGroup onChange={setRadioValue} value={radioValue}>
            <Stack direction="row">
              <Radio value="0">A</Radio>
              <Radio value="1">B</Radio>
              <Radio value="2">C</Radio>
              <Radio value="3">D</Radio>
              <Radio value="4">E</Radio>
            </Stack>
          </RadioGroup>

          <Heading as="h2" size="md">
            Opsi Jawaban
          </Heading>
          <Textarea
            placeholder="Opsi A"
            size="md"
            value={question?.answers_A}
            onChange={(e) => questionChangeHandler(e, 'answers_A')}
          />
          <Textarea
            placeholder="Opsi B"
            size="md"
            value={question?.answers_B}
            onChange={(e) => questionChangeHandler(e, 'answers_B')}
          />
          <Textarea
            placeholder="Opsi C"
            size="md"
            value={question?.answers_C}
            onChange={(e) => questionChangeHandler(e, 'answers_C')}
          />
          <Textarea
            placeholder="Opsi D"
            size="md"
            value={question?.answers_D}
            onChange={(e) => questionChangeHandler(e, 'answers_D')}
          />
          <Textarea
            placeholder="Opsi E"
            size="md"
            value={question?.answers_E}
            onChange={(e) => questionChangeHandler(e, 'answers_E')}
          />

          <Button colorScheme="teal" size="md" onClick={saveHandler}>
            Simpan Pertanyaan
          </Button>

          <Heading as="h2" size="md">
            Navigasi Soal
          </Heading>
          <SimpleGrid columns={[5, 10, 15, 20]}>
            {nums.map((num) => (
              <Button
                colorScheme="teal"
                size="md"
                m="0.25rem"
                key={num}
                variant={`${num === question.questionNumber ? 'solid' : 'outline'}`}
                onClick={(e) => navigationHandler(e, num)}>
                {num}
              </Button>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Layout>
  );
}
