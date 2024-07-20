'use client';

import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import { ShowDetails } from './../ShowDetails/ShowDetails';
import { ReviewForm } from '../../review/ReviewForm/ReviewForm';
import { ReviewList } from '../../review/ReviewList/ReviewList';
import { ReviewMockList } from '../../review/ReviewMockList/ReviewMockList';
import { IReview } from '../../../../../typings/review';

import '/styles/global.css';
import { useState } from 'react';

const reviews = ReviewMockList;

export const ShowReviewSection = () => {
  const [reviewsList, setReviewsList] = useState<{reviews: IReview[]}>(reviews);

  const showDetails = {
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    imageUrl: '/assets/matrix.png',
  };

  const onAddShowReview = (review: IReview) => {
    const newReviewList = {
      reviews: [review, ...reviewsList.reviews],
    };

    setReviewsList(newReviewList);
  };

  return (
    <Box bg="black">
      <Container paddingBlock={20}>
        <VStack spacing={10}>
          <Heading as="h1" size="2xl" color="white">
            Movie Reviews
          </Heading>
          <ShowDetails show={showDetails} />
          <ReviewForm addShowReview={onAddShowReview} />
          <ReviewList reviewList={reviewsList} />
        </VStack>
      </Container>
    </Box>
  );
};
