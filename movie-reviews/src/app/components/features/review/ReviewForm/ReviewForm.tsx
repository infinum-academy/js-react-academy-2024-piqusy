import { Button, Card, CardBody, chakra, FormLabel, Heading, Radio, RadioGroup, Stack, Textarea } from '@chakra-ui/react';
import { IReview } from '../../../../../typings/review';
import { useState } from 'react';

interface IReviewFormProps {
  addShowReview: (reivew: IReview) => void;
}

export const ReviewForm = ({ addShowReview }: IReviewFormProps) => {
  const [rating, setRating] = useState('1');

  const onSubmit = (e: any) => {
    e.preventDefault();

    const commentEl = document.getElementById('comment') as HTMLInputElement;

    const newReview: IReview = {
      comment: commentEl.value ?? '',
      rating: parseInt(rating),
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

          <FormLabel marginTop={8} htmlFor="rating">
            Rating
          </FormLabel>
          <RadioGroup onChange={setRating} value={rating} name="rating" id="rating">
            <Stack direction="row">
              {[...Array(5)].map((_, i) => (
                <Radio key={i} value={String(i + 1)}>
                  {i + 1}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>

          <Button onClick={onSubmit} marginTop={8}>
            Add review
          </Button>
        </chakra.form>
      </CardBody>
    </Card>
  );
};
