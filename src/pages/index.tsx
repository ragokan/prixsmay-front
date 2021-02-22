import { Box, Divider, Flex, Heading, Icon, Link, Stack, Text, useColorMode, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import { FaCommentAlt } from "react-icons/fa"
import { EditDeleteButtons } from "../components/posts/EditDeleteButtonsComponent"
import { VoteComponent } from "../components/posts/VoteComponent"
import { Wrapper } from "../components/Wrapper"

const Index = () => {
  const { colorMode } = useColorMode()
  const [isMobile] = useMediaQuery("(max-width: 800px)")

  return (
    <Wrapper>
      <Flex>
        <Stack spacing={8} flex={2} marginRight={!isMobile ? 5 : 0}>
          {new Array(20)
            .fill(() => "")
            .map((val, index) => (
              <Flex
                key={index}
                p={5}
                shadow="lg"
                borderWidth="2px"
                borderRadius="4px"
                bg={colorMode === "dark" ? "#151516" : "#F7F9FA"}
              >
                <VoteComponent onClick={{ up: () => {}, down: () => {} }} isVoted={{}} />
                <Box flex={1} position="relative">
                  <Link>
                    <Heading fontSize="xl">Okanman {index + 1}</Heading>
                  </Link>

                  <Text>posted by bukimnan</Text>

                  <Flex align="center">
                    <Text flex={1} mt={4}>
                      Burası açıklama
                      <Divider my={2} />
                      <Flex>
                        <Box color="gray" fontSize="sm">
                          <Icon as={FaCommentAlt} /> 5 Comments
                        </Box>
                        <Divider width={5} orientation="vertical" />
                        <Box color="gray" fontSize="sm">
                          <Icon as={FaCommentAlt} /> 5 Comments
                        </Box>
                      </Flex>
                    </Text>
                  </Flex>
                  <Box position="absolute" right="0" top={isMobile ? "20%" : "50%"}>
                    <EditDeleteButtons onClick={{ edit: () => {}, delete: () => {} }} />
                  </Box>
                </Box>
              </Flex>
            ))}
        </Stack>
        {!isMobile && (
          <Stack spacing={8} flex={1}>
            {new Array(20)
              .fill(() => "")
              .map((val, index) => (
                <Flex
                  key={index}
                  p={5}
                  shadow="lg"
                  borderWidth="2px"
                  borderRadius="4px"
                  bg={colorMode === "dark" ? "#151516" : "#F7F9FA"}
                >
                  {/* <UpdootSection post={p} /> */}
                  <Box flex={1}>
                    <Link>
                      <Heading fontSize="xl">Okanman {index + 1}</Heading>
                    </Link>

                    <Text>posted by bukimnan</Text>
                    <Flex align="center">
                      <Text flex={1} mt={4}>
                        Burası açıklama
                      </Text>
                      <Box ml="auto">{/* <EditDeletePostButtons/> */}</Box>
                    </Flex>
                  </Box>
                </Flex>
              ))}
          </Stack>
        )}
      </Flex>
    </Wrapper>
  )
}

export default Index
