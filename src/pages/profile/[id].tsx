import { Avatar, Box, Button, Divider, Flex, Stack, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React, { useEffect } from "react";
import { GetProfileAction } from "../../actions/ProfileActions";
import { CakeComponent } from "../../components/icons/CakeComponent";
import { KarmaComponent } from "../../components/icons/KarmaComponent";
import PostComponent from "../../components/posts/PostComponent";
import { NotFoundComponent } from "../../components/utility/NotFound";
import { Wrapper } from "../../components/utility/Wrapper";
import { PostState, setPostState } from "../../state/PostState";
import { CurrentView } from "../../types/PostType";
import { IUser } from "../../types/UserType";
import { NotEmpty } from "../../utils/NotEmpty";

const PublicProfile: NextPage<PublicProfileProps> = ({ user }) => {
  const page = 1;
  useEffect(() => {
    setPostState((prevState) =>
      page === 1
        ? { posts: user.posts, currentView: CurrentView.multiple }
        : { posts: [...prevState.posts, ...user.posts], currentView: CurrentView.multiple }
    );
  }, []);
  const posts = PostState((state) => state.posts);
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const { colorMode } = useColorMode();

  const Page = () => (
    <Wrapper>
      <Flex>
        <Stack spacing={8} flex={2} marginRight={!isMobile ? 5 : 0}>
          {posts.map((post, index) => (
            <PostComponent key={index} post={post} />
          ))}
        </Stack>
        {!isMobile && (
          <Stack spacing={8} flex={1}>
            <Flex
              p={5}
              shadow="lg"
              borderWidth="2px"
              borderRadius="4px"
              bg={colorMode === "dark" ? "#151516" : "#F7F9FA"}
              position="relative"
            >
              <Box
                height="24"
                bg="blue.400"
                width="100%"
                position="absolute"
                top="0"
                left="0"
                zIndex={0}
                borderTopRadius={5}
              />
              <Box zIndex={1} marginTop={5} width="100%">
                <Stack>
                  <Avatar src={user.profile.picture} size="xl" loading="eager" />
                  <Text>{user.username}</Text>
                  <Divider height="3" />
                  <Flex flexDir="row">
                    <Stack flex={1}>
                      <Text fontWeight="semibold">Karma</Text>
                      <Text>
                        <KarmaComponent /> 0
                      </Text>
                    </Stack>
                    <Stack flex={1}>
                      <Text fontWeight="semibold">Cake day</Text>
                      <Text>
                        <CakeComponent />
                        August 3, 1999
                      </Text>
                    </Stack>
                  </Flex>
                  <Divider height="3" />
                  <Flex flexDir="row">
                    <Button colorScheme="blue" borderRadius="3xl" height="8" flex="1" marginX="2">
                      Follow
                    </Button>
                    <Button colorScheme="blue" borderRadius="3xl" height="8" flex="1" marginX="2">
                      Chat
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            </Flex>
          </Stack>
        )}
      </Flex>
    </Wrapper>
  );

  return NotEmpty(user) ? <Page /> : <NotFoundComponent title="profile" />;
};

interface PublicProfileProps {
  user: IUser;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const userId: string = typeof params.id === "string" ? params.id : "null";
  let user;
  try {
    user = await GetProfileAction(userId);
  } catch (error) {
    user = {};
  }
  return { props: { user } as PublicProfileProps };
};

export default PublicProfile;
