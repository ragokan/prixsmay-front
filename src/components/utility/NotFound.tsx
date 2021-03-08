import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const NotFoundComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
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
          The {title} you are looking for is not found!
        </AlertTitle>
        <Link href="/">
          <AlertDescription
            cursor="pointer"
            color="blue.400"
            maxWidth="xl"
            fontSize="2xl"
            _hover={{ textDecoration: "underline", color: "blue.500" }}
          >
            Click here to go home!
          </AlertDescription>
        </Link>
      </Alert>
    </Box>
  );
};
