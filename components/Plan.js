import React from "react";
import { Heading, Flex, Text, Button } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";
import AddModal from "./AddModal";

const Plan = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      justify="center"
      direction="column"
      align="center"
    >
      <Heading size="lg" as="h2" mb={2}>
        You haven't added any sites.
      </Heading>
      <Text mb={4}>Welcome stranger, let's get it started!</Text>
      <AddModal />
    </Flex>
  </DashboardShell>
);

export default Plan;
