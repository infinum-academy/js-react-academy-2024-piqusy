'use client';

import { Heading } from '@chakra-ui/react';
import styles from './page.module.css';
import '/styles/global.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading as="h1" size="2xl" color="white">Movie Reviews</Heading>
    </main>
  );
}
