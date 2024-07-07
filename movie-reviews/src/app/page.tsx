'use client';

import { Heading } from '@chakra-ui/react';
import { ShowDetails } from './components/features/shows/ShowDetails';
import { ShowReviewSection } from './components/features/shows/ShowReviewSection';
import styles from './page.module.css';
import '/styles/global.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading as="h1" size="2xl" color="white">
        Movie Reviews
      </Heading>
      <ShowDetails />
      <ShowReviewSection />
    </main>
  );
}
