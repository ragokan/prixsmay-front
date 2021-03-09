import { Stack, Flex, Box, ColorMode, Text } from "@chakra-ui/react";
import React from "react";
import { CommunityState } from "../../state/CommunityState";
import { UpComponent } from "../icons/UpComponent";
import { BothLink } from "../utility/BothLink";

export const TopCommunityCard: React.FC<{ colorMode: ColorMode }> = ({ colorMode }) => {
  const communities = CommunityState((state) => state.communities);
  const topCommunities = communities ? communities.slice(0, 5) : [];

  return (
    <Stack spacing={8} flex={1} width="100%">
      <Flex
        p={5}
        shadow="lg"
        borderWidth="2px"
        borderRadius="4px"
        bg={colorMode === "dark" ? "#151516" : "#F7F9FA"}
        position="relative"
        width="100%"
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
        <Box zIndex={1} width="100%">
          <Stack marginTop="10">
            <Text fontWeight="bold">Top Communities To Follow</Text>
          </Stack>
          <Stack marginTop="10">
            {topCommunities.map((community, index) => (
              <BothLink href={`/c/${community.name}`} key={community.id}>
                <Box cursor="pointer">
                  {index + 1} <UpComponent /> c/{community.name}
                </Box>
              </BothLink>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
};
