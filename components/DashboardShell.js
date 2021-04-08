import React from "react";
import {
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { Logo } from "@/styles/icons";
import { useAuth } from "@/lib/auth";

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        pt={4}
        pb={4}
        p={4}
      >
        <Stack spacing={4} isInline justifyContent="center" alignItems="center">
          <Logo boxSize={8} />
          <Link height={6}>Feedback</Link>
          <Link height={6}>Sites</Link>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          <Link height={6} mr={4}>
            Account
          </Link>
          <Avatar size="sm" src={auth.user.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="linkedin.400" p={8} height="100vh">
        <Flex maxWidth="800px" ml="auto" mr="auto" direction="column" w="100%">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="purple" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
