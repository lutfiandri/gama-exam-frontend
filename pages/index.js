import Head from 'next/head';
import { Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button color="brand.primary">hai</Button>
      </main>
    </div>
  );
}
