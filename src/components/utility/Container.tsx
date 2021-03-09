import { BoxProps } from "@chakra-ui/react";
import React from "react";
import { ShadowBox } from "./ShadowBox";
import { Wrapper } from "./Wrapper";

export const Container: React.FC<BoxProps> = (props) => {
  return (
    <Wrapper>
      <ShadowBox {...props} />
    </Wrapper>
  );
};
