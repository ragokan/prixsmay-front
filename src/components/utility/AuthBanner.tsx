import { Flex, Box, Heading, useColorMode, Divider, chakra } from "@chakra-ui/react"
import React from "react"
import { BothLink } from "./BothLink"

export const AuthBanner: React.FC<{ isLogged: boolean }> = ({ isLogged }) => {
  const { colorMode } = useColorMode()
  return !isLogged ? (
    <Flex p={5} shadow="lg" borderWidth="2px" borderRadius="4px" bg={colorMode === "dark" ? "#151516" : "#F7F9FA"}>
      <Box flex={1} position="relative" textAlign="center">
        <Heading fontSize="lg">Looks like you are not logged in.</Heading>
        <Divider my={2.5} />
        <BothLink href="/auth/login" display="block">
          If you have an account,click to <chakra.strong> Login</chakra.strong>.
        </BothLink>
        <BothLink href="/auth/register">
          If you are not a Prixsmay User, click to <chakra.strong> Register.</chakra.strong>
        </BothLink>
      </Box>
    </Flex>
  ) : (
    <> </>
  )
}
