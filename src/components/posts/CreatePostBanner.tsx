import { Box } from "@chakra-ui/layout";
import { Avatar, Input, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { UserState } from "../../state/UserState";
import { NotEmpty } from "../../utils/NotEmpty";

export const CreatePostBanner: React.FC = () => {
  const { colorMode } = useColorMode();
  const user = UserState((state) => state.user);
  const router = useRouter();

  return NotEmpty(user) ? (
    <Box
      d="flex"
      p={3}
      shadow="lg"
      borderWidth="2px"
      borderRadius="4px"
      bg={colorMode === "dark" ? "#151516" : "#F7F9FA"}
      position="relative"
      alignItems="center"
    >
      <Avatar src={user.profile.picture} mr="4" d="block" />
      <Input placeholder="Create Post" onFocus={() => router.push("/post/create")} />
    </Box>
  ) : (
    <></>
  );
};
