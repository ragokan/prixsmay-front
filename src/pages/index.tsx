import { Flex, Stack, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import PostComponent from "../components/posts/PostComponent"
import { AuthBanner } from "../components/utility/AuthBanner"
import { Wrapper } from "../components/utility/Wrapper"
import { UserState } from "../state/UserState"

const Index = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  const isLogged = UserState((state) => state.isLogged)

  return (
    <Wrapper>
      <Flex>
        <Stack spacing={8} flex={2} marginRight={!isMobile ? 5 : 0}>
          <AuthBanner isLogged={isLogged} />
          {new Array(20)
            .fill(() => "")
            .map((val, index) => (
              <PostComponent key={index} />
            ))}
        </Stack>
        {!isMobile && (
          <Stack spacing={8} flex={1}>
            {new Array(20)
              .fill(() => "")
              .map((val, index) => (
                <PostComponent key={index} />
              ))}
          </Stack>
        )}
      </Flex>
    </Wrapper>
  )
}

export default Index
