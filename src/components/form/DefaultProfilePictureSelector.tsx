import {
  FormControl,
  FormLabel,
  FormHelperText,
  Link,
  RadioGroup,
  Radio,
  Avatar,
  Flex,
  AvatarBadge,
} from "@chakra-ui/react"
import { ProfilePictureConstants } from "../../constants/ProfilePictureConstants"
import React from "react"

interface DefaultProfilePictureSelectorProps {
  profilePicture: string
  setProfilePicture: (picture: string) => void
}

export const DefaultProfilePictureSelector: React.FC<DefaultProfilePictureSelectorProps> = ({
  profilePicture,
  setProfilePicture,
}) => {
  React.useEffect(() => {
    setProfilePicture(ProfilePictureConstants[0])
  }, [])
  return (
    <FormControl id="profilePicture" mb={7}>
      <FormLabel>Profile Picture</FormLabel>
      <RadioGroup
        onChange={setProfilePicture}
        value={profilePicture}
        colorScheme="blue"
        defaultValue={ProfilePictureConstants[0]}
      >
        <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
          {ProfilePictureConstants.map((picture, index) => (
            <Radio value={picture} key={index} id={String(index)} mr={5} my={5} ml={-1} size="lg" hidden>
              <Avatar src={picture} size="lg" cursor="pointer">
                {profilePicture === picture && (
                  <AvatarBadge bg="blue.400" boxSize="8" position="absolute" left={2} bottom={-3} />
                )}
              </Avatar>
            </Radio>
          ))}
        </Flex>
      </RadioGroup>
      <FormHelperText>Don't worry, you can upload any picture after creating your account!</FormHelperText>
      <FormHelperText>
        For Picture Credits{" "}
        <Link href="https://www.behance.net/gallery/47035405/Free-avatars-flat-icons" isExternal color="blue.400">
          Click Here!
        </Link>
      </FormHelperText>
    </FormControl>
  )
}
