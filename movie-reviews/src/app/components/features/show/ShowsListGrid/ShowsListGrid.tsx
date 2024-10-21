"use client";
import { IShow, IShowReview } from "@/typings/show";
import { ShowCard } from "../ShowCard/ShowCard";
import { Grid } from "@chakra-ui/react";

export interface IShowsListGridProps {
  showsList: Array<IShow>;
}
export const ShowsListGrid = ({ showsList, ...rest }: IShowsListGridProps) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4} {...rest}>
      {showsList.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </Grid>
  );
};
