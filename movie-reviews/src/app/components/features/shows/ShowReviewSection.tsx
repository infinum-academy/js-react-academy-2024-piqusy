import { ReviewForm } from '../reviews/ReviewForm';
import { ReviewList } from '../reviews/ReviewList';
import { ReviewContainer } from '../reviews/ReviewContainer';

export const ShowReviewSection = () => {
  const reviews = ReviewContainer;

  return (
    <>
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </>
  );
};
