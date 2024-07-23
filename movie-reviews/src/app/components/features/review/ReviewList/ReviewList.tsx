import { Heading, Stack } from '@chakra-ui/react';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { ReviewMockList } from '../ReviewMockList/ReviewMockList';
import { IReview, IReviewList } from '../../../../../typings/review';

interface IReviewListProps {
  reviewList: IReviewList;
}

export const ReviewList = ( { reviewList }: IReviewListProps) => {
  reviewList = reviewList ?? ReviewMockList;

  return (
    <Stack spacing={4} w="100%">
      <Heading color="white">Review List</Heading>
      <Stack spacing={4} w="100%">
        {reviewList.reviews.map((review: IReview, i) => (
          <ReviewItem key={i} review={review} />
        ))}
      </Stack>
    </Stack>
  );
};
