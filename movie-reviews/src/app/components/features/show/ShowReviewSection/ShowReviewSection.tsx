import { ReviewForm } from '../../review/ReviewForm/ReviewForm';
import { ReviewList } from '../../review/ReviewList/ReviewList';
import { ReviewMockList } from '../../review/ReviewMockList/ReviewMockList';
import { IReview } from '../../../../../typings/review';
const reviews = ReviewMockList;

export const ShowReviewSection = () => {

  return (
    <>
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </>
  );
};
