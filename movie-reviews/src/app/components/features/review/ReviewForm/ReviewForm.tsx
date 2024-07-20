import { Button, Card, CardBody, chakra, FormLabel, Heading, Radio, RadioGroup, Stack, Textarea } from '@chakra-ui/react';
import { IReview } from '../../../../../typings/review';
import { useState } from 'react';

interface IReviewFormProps {
  addShowReview: (reivew: IReview) => void;
}

export const ReviewForm = ({ addShowReview }: IReviewFormProps) => {
  const [rating, setRating] = useState('1');

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
          <RadioGroup onChange={setRating} value={rating} name="rating">
            <Stack direction="row">
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
              <Radio value="5">5</Radio>
            </Stack>
          </RadioGroup>

          <Button onClick={addShowReview as any} marginTop={8}>
            Add revirew
          </Button>
        </chakra.form>
      </CardBody>
    </Card>
  );
};
