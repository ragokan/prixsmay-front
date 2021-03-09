import { useColorMode, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { TopCommunityCard } from "../community/TopCommunityCard";

export const MainRightPanel: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const { colorMode } = useColorMode();

  return <>{!isMobile && <TopCommunityCard colorMode={colorMode} />}</>;
};
