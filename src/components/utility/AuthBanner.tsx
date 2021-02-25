import { Flex, Box, Heading, useColorMode, Divider } from "@chakra-ui/react"
import React from "react"
import { BothLink } from "./BothLink"

export const AuthBanner: React.FC = () => {
  const { colorMode } = useColorMode()
  const user = false
  return !user ? (
    <Flex p={5} shadow="lg" borderWidth="2px" borderRadius="4px" bg={colorMode === "dark" ? "#151516" : "#F7F9FA"}>
      <Box flex={1} position="relative" textAlign="center">
        <Heading fontSize="lg" mb={3}>
          Looks like you are not logged in.
        </Heading>
        <Divider />
        <BothLink href="/auth/login" display="block" mt={2}>
          If you have an account, click to Login.
        </BothLink>
        <BothLink href="/auth/register">If you are not a Prixsmay User, click to Register.</BothLink>
      </Box>
    </Flex>
  ) : (
    <> </>
  )
}
