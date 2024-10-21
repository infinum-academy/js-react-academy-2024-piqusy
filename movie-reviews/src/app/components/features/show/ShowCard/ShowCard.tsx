"use client";

import NextLink from "next/link";
import { IShow } from "@/typings/show";
import { Button, Card, Image, Heading, HStack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface IShowCardProps {
  show: IShow;
}

export const ShowCard = ({ show, ...rest }: IShowCardProps) => {
  return (
    <Card {...rest}>
      <Button
        as={NextLink}
        href={`/all-shows/${show.id}`}
        display="block"
        padding={0}
        height="auto"
      >
        <Image
          src={show.imageUrl ?? "https://placehold.co/600x400"}
          alt="Movie image"
        />
        <Heading>{show.title}</Heading>
        <HStack>
          <StarIcon color="gray.900" boxSize={2} />
          <Text>{show.averageRating} / 5</Text>
        </HStack>
      </Button>
    </Card>
  );
};
