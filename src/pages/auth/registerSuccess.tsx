import React from "react"
import { NextPage } from "next"
import { Alert, AlertIcon, AlertTitle, Link, AlertDescription, Divider } from "@chakra-ui/react"

const RegisterSuccess: NextPage = () => {
  return (
    <Alert
      status="success"
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
        You registered successfully!
        <Divider height="5" />
        Please check your e-mail to activate your account.
      </AlertTitle>
      <AlertDescription cursor="pointer" color="blue.400" maxWidth="xl" fontSize="2xl">
        <Link href="/">Click here to go home!</Link>
        <Divider height="5" />
        <Link href="/auth/sendActivationMail">
          Click here if you didn't receive email or forgot to activate your account in 24 hours!
        </Link>
      </AlertDescription>
    </Alert>
  )
}

export default RegisterSuccess
