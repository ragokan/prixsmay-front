import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

const Page404: React.FC = () => {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      minH="95vh"
      m="auto"
    >
      <AlertIcon boxSize="100px" mr={0} />
      <AlertTitle my={10} fontSize="4xl">
        The page you are looking for is not found!
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
  )
}

export default Page404
