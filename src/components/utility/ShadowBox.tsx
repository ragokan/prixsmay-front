import { BoxProps, useColorMode, Box } from "@chakra-ui/react";
import React from "react";

export const ShadowBox: React.FC<BoxProps> = (props) => {
  const { colorMode } = useColorMode();

  return (
    <Box backgroundColor={colorMode === "dark" ? "#1A1A1B" : "#FFFFFF"} p={10} borderRadius={10} {...props} shadow="xl">
      {props.children}
    </Box>
  );
};
