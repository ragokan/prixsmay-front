import { Flex, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { UserState } from "../../state/UserState";
import { IPost } from "../../types/PostType";
import { MainRightPanel } from "../main/MainRightPanel";
import { AuthBanner } from "../utility/AuthBanner";
import { Wrapper } from "../utility/Wrapper";
import { CreatePostBanner } from "./CreatePostBanner";
import PostComponent from "./PostComponent";

export const MainPagePosts: React.FC<{ posts: IPost[] }> = ({ posts = [] }) => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const isLogged = UserState((state) => state.isLogged);

  return (
    <Wrapper>
      <Flex>
        <Stack spacing={8} flex={2} marginRight={!isMobile ? 5 : 0}>
          <AuthBanner isLogged={isLogged} />
          <CreatePostBanner />
          {posts.map((post, index) => (
            <PostComponent key={index} post={post} />
          ))}
        </Stack>
        <MainRightPanel />
      </Flex>
    </Wrapper>
  );
};
