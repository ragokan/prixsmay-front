import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { ColorModeSwitcher } from "../../utility/ColorModeSwitcher"
import { LinksForMobile } from "./LinksForMobile"
import { FaBars } from "react-icons/fa"

export const MobileLinks: React.FC<{ user: any }> = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)
  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <FaBars />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{user}</DrawerHeader>
            <DrawerBody>
              <VStack alignItems="start" spacing="6" style={{ marginTop: 20 }} onClick={onClose} width="min">
                <LinksForMobile />
              </VStack>
              <ColorModeSwitcher marginTop="5" />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
