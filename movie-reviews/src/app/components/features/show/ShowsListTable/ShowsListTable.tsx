"use client";
import { ShowsListTableItem } from "./components/ShowsListTableItem/ShowsListTableItem";
import { IShowReview } from "@/typings/show";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  TableContainerProps,
} from "@chakra-ui/react";

export interface IShowsListTableProps extends TableContainerProps {
  showsList: Array<IShowReview>;
}

export const ShowsListTable = ({
  showsList,
  ...rest
}: IShowsListTableProps) => {
  return (
    <TableContainer {...rest}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textTransform='uppercase'>Title</Th>
            <Th>ID</Th>
            <Th textTransform='uppercase' textAlign="right">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {showsList.map((showReview) => (
            <ShowsListTableItem key={showReview.id} showReview={showReview} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
