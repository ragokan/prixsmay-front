import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { BothLink } from "../../components/utility/BothLink";

const NotAuthorized: NextPage = () => (
  <Box height="94vh" display="flex" width="100%">
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      m="auto"
      height="100%"
    >
      <AlertIcon boxSize="100px" mr={0} />
      <AlertTitle my={10} fontSize="4xl">
        You are not authorized to see this page!
      </AlertTitle>
      <BothLink href="/">
        <AlertDescription
          cursor="pointer"
          color="blue.400"
          maxWidth="xl"
          fontSize="2xl"
          _hover={{ textDecoration: "underline", color: "blue.500" }}
        >
          Click here to go home!
        </AlertDescription>
      </BothLink>
      <strong>OR</strong>
      <BothLink href="/auth/login">
        <AlertDescription
          cursor="pointer"
          color="blue.400"
          maxWidth="xl"
          fontSize="2xl"
          _hover={{ textDecoration: "underline", color: "blue.500" }}
        >
          Click here to login!
        </AlertDescription>
      </BothLink>
    </Alert>
  </Box>
);

export default NotAuthorized;
