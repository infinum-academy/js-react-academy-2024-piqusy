import { Card, CardBody, Text, Image, Flex } from '@chakra-ui/react';

interface IReviewProps {
  review: IReview;
}

export const ReviewItem = (review: IReviewProps) => {
  const { avatar, email, comment, rating } = review;

  return (
    <Card w="100%">
      <CardBody>
        <Flex direction="column" gap="2">
          <Flex gap="4" alignItems="center">
            <Image src={avatar ?? 'https://ui-avatars.com/api/?bold=true'} alt="Reviewers avatar" w={10} />
            <Text>{email}</Text>
          </Flex>
          <Text fontSize={'larger'}>{comment}</Text>
          <Text>`Rating: {rating} / 5`</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
