import { Heading, Stack } from '@chakra-ui/react';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { ReviewMockList } from '../ReviewMockList/ReviewMockList';

interface IReviewListProps {
  reviews: IReviewList;
}

export const ReviewList = ({ reviews }: IReviewListProps) => {
  return (
    <Stack spacing={4} w="100%">
      <Heading color="white">Review List</Heading>
      <Stack spacing={4} w="100%">
        {reviews.map((review) => (
          <ReviewItem key={review.email} {...review} />
        ))}
      </Stack>
    </Stack>
  );
};
