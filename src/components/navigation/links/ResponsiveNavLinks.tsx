import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { UserState } from "../../../state/UserState";
import { DesktopLinks } from "./DesktopLinks";
import { MobileLinks } from "./MobileLinks";

export const ResponsiveNavLinks = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const user = UserState((state) => state.user);

  return isMobile ? <MobileLinks user={user} /> : <DesktopLinks user={user} />;
};
