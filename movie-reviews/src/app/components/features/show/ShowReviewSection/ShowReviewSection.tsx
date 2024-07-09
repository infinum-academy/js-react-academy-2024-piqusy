import { ReviewForm } from '../../review/ReviewForm/ReviewForm';
import { ReviewList } from '../../review/ReviewList/ReviewList';
import { ReviewContainer } from '../../review/ReviewContainer/ReviewContainer';

export const ShowReviewSection = () => {
  const reviews = ReviewContainer;

  return (
    <>
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </>
  );
};
