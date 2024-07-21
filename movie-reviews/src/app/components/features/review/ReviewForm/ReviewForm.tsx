import { Button, Card, CardBody, chakra, FormLabel, Heading, Textarea } from '@chakra-ui/react';
import { RadioGroupComponent } from '../../../core/RadioGroupComponent/RadioGroupComponent';
import { IReview } from '../../../../../typings/review';
import { useState } from 'react';

interface IReviewFormProps {
  addShowReview: (reivew: IReview) => void;
}

export const ReviewForm = ({ addShowReview }: IReviewFormProps) => {
  const [ratingValue, setRatingValue] = useState('1');

  const onSubmit = (e: any) => {
    e.preventDefault();

    const commentEl = document.getElementById('comment') as HTMLInputElement;

    const newReview: IReview = {
      comment: commentEl.value ?? '',
      rating: parseInt(ratingValue),
    };

    addShowReview(newReview);
  };

  return (
    <Card w="100%">
      <CardBody>
        <Heading as="h2" size="lg">
          Submit review
        </Heading>

        <chakra.form>
          <FormLabel marginTop={8} htmlFor="comment">
            Comment
          </FormLabel>
          <Textarea placeholder="Add comment" id="comment" name="comment" />

          <RadioGroupComponent rating={ratingValue} onChange={setRatingValue} />

          <Button onClick={onSubmit} marginTop={8}>
            Add review
          </Button>
        </chakra.form>
      </CardBody>
    </Card>
  );
};
