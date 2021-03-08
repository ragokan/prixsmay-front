import { GetServerSideProps, NextPage } from "next";
import React, { useEffect } from "react";
import { FetchCommunitiesAction } from "../actions/CommunityActions";
import { FetchPostsAction } from "../actions/PostActions";
import { MainPagePosts } from "../components/posts/MainPagePosts";
import { setCommunityState } from "../state/CommunityState";
import { PostState, setPostState } from "../state/PostState";
import { ICommunity } from "../types/CommunityType";
import { CurrentView, IPost } from "../types/PostType";

const Index: NextPage<Props> = ({ page, serverPosts, serverCommunities }) => {
  useEffect(() => {
    setPostState((prevState) =>
      page === 1
        ? { posts: serverPosts, currentView: CurrentView.multiple }
        : { posts: [...prevState.posts, ...serverPosts], currentView: CurrentView.multiple }
    );
    setCommunityState({ communities: serverCommunities });
  }, []);
  const posts = PostState((state) => state.posts);

  return <MainPagePosts posts={posts} />;
};

interface Props {
  page: number;
  serverPosts: IPost[];
  serverCommunities: ICommunity[];
}
export const getServerSideProps: GetServerSideProps = async () => {
  const page: number = 1;
  const posts = await FetchPostsAction({ page });
  const serverCommunities = await FetchCommunitiesAction();

  return { props: { serverPosts: posts, page, serverCommunities } as Props };
};

export default Index;
