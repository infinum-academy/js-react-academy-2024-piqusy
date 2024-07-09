'use client';

import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import { ShowDetails } from './components/features/show/ShowDetails/ShowDetails';
import { ShowReviewSection } from './components/features/show/ShowReviewSection/ShowReviewSection';
import '/styles/global.css';

export default function Home() {
  return (
    <Box bg='black'>
      <Container paddingBlock={20}>
        <VStack spacing={10}>
          <Heading as="h1" size="2xl" color="white">
            Movie Reviews
          </Heading>
          <ShowDetails />
          <ShowReviewSection />
        </VStack>
      </Container>
    </Box>
  );
}
