import Head from 'next/head';
import { VStack, Heading } from '@chakra-ui/react';
import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gama Exam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <VStack>
          <Heading as="h2">Page yang sudah bisa diakses</Heading>
          <Link href="/form">
            <a>Form login n register</a>
          </Link>
          <Link href="/result">
            <a>Result</a>
          </Link>
          <Link href="/testList">
            <a>Test List</a>
          </Link>
          <Link href="/kontes/kontesId/12">
            <a>Page Ngerjain</a>
          </Link>
        </VStack>
      </Layout>
    </>
  );
}
