import {
  Card,
  CardHeader,
  Flex,
  Input,
  Button,
  CardBody,
} from "@chakra-ui/react";
import { ShowsListTable } from "../ShowsListTable/ShowsListTable";

export const ShowsList = () => {
  return (
    <Card mx="auto" maxW={1000}>
      <CardHeader>
        <Flex gap={4}>
          <Input placeholder="Filter by title" />
          <Button>Add New Show</Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <ShowsListTable 
          showsList={[{ title: "Test", id: "1", showsList: [] }]}
        />
      </CardBody>
    </Card>
  );
};
