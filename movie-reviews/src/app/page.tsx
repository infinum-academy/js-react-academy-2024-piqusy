'use client';

import { Heading } from '@chakra-ui/react';
import { ShowDetails } from './components/features/shows/ShowDetails';
import styles from './page.module.css';
import '/styles/global.css';
import { ReviewList } from './components/features/reviews/ReviewList';
import { ReviewContainer } from './components/features/reviews/ReviewContainer';

export default function Home() {
  const reviews = ReviewContainer;

  return (
    <main className={styles.main}>
      <Heading as="h1" size="2xl" color="white">
        Movie Reviews
      </Heading>
      <ShowDetails />
      <ReviewList reviews={reviews} />
    </main>
  );
}
