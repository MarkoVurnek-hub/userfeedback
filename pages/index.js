import Head from "next/head";

import { useAuth } from "@/lib/auth";
import { Button, Heading, Text, Code } from "@chakra-ui/react";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <main>
        <Heading fontWeight="medium" as="h2">
          Welcome to User Feedback
        </Heading>

        <Text>
          Current user: <Code>{auth.user ? auth.user.email : "None"}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={e => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={e => auth.signInWithGithub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}
