"use client";
import {
  Tr,
  Td,
  TableRowProps,
  Button,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import { IShowReview } from "@/typings/show";

interface IShowsListTableProps extends TableRowProps {
  showReview: IShowReview;
}

export const ShowsListTableItem = ({
  showReview,
  ...rest
}: IShowsListTableProps) => {
  return (
    <Tr {...rest}>
      <Td>{showReview.title}</Td>
      <Td>{showReview.id}</Td>
      <Td textAlign="right">
        <ButtonGroup gap={2}>
          <Button
            as={NextLink}
            href={`/all-shows/${showReview.id}`}
            fontWeight="bold"
          >
            Details
          </Button>
          <IconButton aria-label="Delete show" icon={<DeleteIcon />} w={12} />
        </ButtonGroup>
      </Td>
    </Tr>
  );
};
