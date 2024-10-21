import {
  Card,
  CardHeader,
  Flex,
  Input,
  Button,
  CardBody,
} from "@chakra-ui/react";
import { ShowsListGrid } from "../ShowsListGrid/ShowsListGrid";

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
        <ShowsListGrid
          showsList={[ showDetails ]}
        />
      </CardBody>
    </Card>
  );
};
