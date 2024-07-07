import { Heading, Stack } from '@chakra-ui/react';
import { ReviewItem } from './ReviewItem';

export const ReviewList = ({ reviews }: IReviews) => {
  const reviewList = reviews.map((review) => <ReviewItem key={review.email} {...review} />);

  return (
    <Stack spacing={4} w="100%">
      <Heading color="white">Review List</Heading>
      <Stack spacing={4} w="100%">
        {reviewList}
      </Stack>
    </Stack>
  );
};
