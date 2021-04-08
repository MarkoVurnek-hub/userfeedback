import Head from "next/head";
import { useAuth } from "@/lib/auth";
import { Button, Heading, Text, Code, Flex } from "@chakra-ui/react";
import { Logo } from "@/styles/icons";
import Plan from "@/components/Plan";

export default function Dashboard() {
  const auth = useAuth();
  if (!auth.user) {
    return "Loading...";
  }
  return <Plan />;
}
