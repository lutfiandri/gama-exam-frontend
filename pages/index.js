import Head from 'next/head';
import { Button } from '@chakra-ui/react';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Button color="brand.primary">hai</Button>
      </Layout>
    </>
  );
}
