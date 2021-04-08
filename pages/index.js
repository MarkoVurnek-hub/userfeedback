import Head from "next/head";
import { useAuth } from "@/lib/auth";
import { Button, Heading, Text, Code, Flex } from "@chakra-ui/react";
import { Logo } from "@/styles/icons";
import Scene from "utils/Scene";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const auth = useAuth();
  return (
    <div>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        w="full"
      >
        <Scene />
        <Logo boxSize={40} zIndex="100" />
        {auth.user ? (
          <Button onClick={e => auth.signout()}>Sign Out</Button>
        ) : (
          <Button
            colorScheme="purple"
            mt={4}
            size="sm"
            onClick={e => {
              auth.signInWithGithub();
              router.push("/dashboard");
            }}
          >
            Sign In
          </Button>
        )}
      </Flex>
    </div>
  );
}
