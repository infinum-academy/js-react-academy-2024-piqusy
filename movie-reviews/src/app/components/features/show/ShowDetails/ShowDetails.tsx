import { Card, CardBody, CardHeader, Heading, Image, Text, Flex, Box } from '@chakra-ui/react';
import { IShow } from '../../../../../typings/show';

interface IShowDetailsProps {
  show: IShow;
}

export const ShowDetails = ({ show }: IShowDetailsProps) => {
  const { title, description, imageUrl, averageRating } = show;

  return (
    <Card>
      <CardHeader padding={0}>
        <Image src={imageUrl ?? 'https://placehold.co/600x400'} alt="Movie image" />
      </CardHeader>

      <CardBody>
        <Flex direction="column" gap="2">
          <Heading>{title}</Heading>
          <Text className="description">{description}</Text>
          <Box className="rating">{averageRating ?? 'No rating'}</Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
