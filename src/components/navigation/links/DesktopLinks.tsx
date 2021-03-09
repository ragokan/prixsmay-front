import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { LogoutAction } from "../../../actions/AuthActions";
import { IUser } from "../../../types/UserType";
import { ColorModeSwitcher } from "../../utility/ColorModeSwitcher";
import { NavButton } from "./utils/NavButton";

export const DesktopLinks: React.FC<{ user: IUser }> = ({ user }) => {
  const router = useRouter();
  return (
    <>
      {!user && (
        <Box d="inline-block" mr="4">
          <NavButton href="/auth/login" title="Login" />
          <NavButton href="/auth/register" title="Register" isBlue />
        </Box>
      )}
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          <Avatar size="xs" marginTop={-1} src={user?.profile?.picture} /> {user?.username || "Guest"}
        </MenuButton>
        <MenuList>
          {user && (
            <>
              <MenuItem onClick={() => router.push("/user/account")}>Account</MenuItem>
              <MenuItem onClick={() => router.push(`/profile/${user.username}`)}>Profile</MenuItem>
              <MenuItem onClick={async () => await LogoutAction(() => router.push("/"))}>Logout</MenuItem>
            </>
          )}
          <ColorModeSwitcher fontWeight="normal" marginLeft="3" marginTop="2" />
        </MenuList>
      </Menu>
    </>
  );
};
