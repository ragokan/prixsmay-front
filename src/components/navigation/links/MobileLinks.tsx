import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LogoutAction } from "../../../actions/AuthActions";
import { IUser } from "../../../types/UserType";
import { ColorModeSwitcher } from "../../utility/ColorModeSwitcher";

export const MobileLinks: React.FC<{ user: IUser }> = ({ user }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <FaBars />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Avatar size="xs" marginTop={0.5} src={user?.profile?.picture} /> {user?.username || "Guest"}
            </DrawerHeader>
            <DrawerBody>
              <VStack alignItems="start" spacing="6" style={{ marginTop: 20 }} onClick={onClose} width="min">
                <Button onClick={() => router.push("/user/account")} variant="link" color="current">
                  Account
                </Button>
                <Button onClick={() => router.push(`/profile/${user.username}`)} variant="link" color="current">
                  Profile
                </Button>
                <Button onClick={async () => await LogoutAction(() => router.push("/"))} variant="link" color="current">
                  Logout
                </Button>
              </VStack>
              <ColorModeSwitcher marginTop="5" />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
