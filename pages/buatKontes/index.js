import Layout from '../../components/layout/index';
import { Box, Container, SimpleGrid, GridItem, VStack, HStack, Spacer, Heading, Text, Stack } from '@chakra-ui/layout';
import { Input, RadioGroup, Radio, Textarea, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateContest() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [numOfQuestion, setNumOfQuestion] = useState('');

  const createContestHandler = () => {
    axios({
      method: 'post',
      url: 'https://localhost:44393/api/contests',
      data: {
        title: title,
        duration: Number(duration),
        startTime: startTime,
        endTime: endTime,
        numOfQuestion: Number(numOfQuestion),
      },
    })
      .then((response) => {
        if (response.status === 201) {
          for (let i = 1; i <= numOfQuestion; i++) {
            axios({
              method: 'post',
              url: 'https://localhost:44393/api/questions',
              data: {
                questionNumber: i,
                questionText: '',
                answers_A: '',
                answers_B: '',
                answers_C: '',
                answers_D: '',
                answers_E: '',
                trueAnswer: 0,
                contestId: response.data.id,
              },
            })
              .then(() => console.log(`question number ${i} | contestId ${response.data.id} berhasil dibuat`))
              .catch(() => console.log(`question number ${i} | contestId ${response.data.id} gagal dibuat`));
          }

          alert(`Kontes ${title} berhasil dibuat`);
          setTitle('');
          setDuration('');
          setStartTime('');
          setEndTime('');
          setNumOfQuestion('');

          router.push(`/buatKontes/${response.data.id}/1`); // sementara buat ngecek berhasil ku redirect ke '/'
        } else {
          alert('Terjadi kesalahan pada server. Gagal membuat kontes');
        }
      })
      .catch(() => {
        alert('Terjadi kesalahan pada server. Gagal membuat kontes');
      });
  };

  return (
    <Layout>
      <Container maxW="container.xl" py="2rem">
        <Stack>
          <Heading as="h1">Buat Kontes</Heading>
          <Heading as="h2" size="md">
            Judul Kontes
          </Heading>
          <Input
            placeholder="Masukkan judul kontes..."
            size="md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Heading as="h2" size="md">
            Durasi (menit)
          </Heading>
          <Input
            placeholder="Masukkan durasi..."
            size="md"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          <Heading as="h2" size="md">
            Tanggal Kontes Dibuka (yyyy-mm-dd) misal (2020-12-30)
          </Heading>
          <Input
            placeholder="Masukkan tanggal dibuka..."
            size="md"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <Heading as="h2" size="md">
            Tanggal Kontes Ditutup (yyyy-mm-dd) misal (2021-12-30)
          </Heading>
          <Input
            placeholder="Masukkan tanggal ditutup..."
            size="md"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          <Heading as="h2" size="md">
            Jumlah Pertanyaan
          </Heading>
          <Input
            placeholder="Masukkan jumlah pertanyaan..."
            size="md"
            value={numOfQuestion}
            onChange={(e) => setNumOfQuestion(e.target.value)}
          />

          <Button colorScheme="teal" size="md" onClick={createContestHandler}>
            Buat Kontes
          </Button>
        </Stack>
      </Container>
    </Layout>
  );
}
