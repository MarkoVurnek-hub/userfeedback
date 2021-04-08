import React from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";

const FreePlan = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading size="md" as="h2">
        Get feedback on your site instantly.
      </Heading>
      <Text>Start today and make user feedback easy!</Text>
      <Button variant="solid" size="md">
        Upgrade to Starter{" "}
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlan;
