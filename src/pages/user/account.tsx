import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormControlProps,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react"
import { NextPage } from "next"
import React from "react"
import { BothLink } from "../../components/utility/BothLink"
import { Container } from "../../components/utility/Container"
import { UserState } from "../../state/UserState"

interface AccountItemProps extends FormControlProps {
  label: string
  value: string
}
const AccountItem: React.FC<AccountItemProps> = (props) => (
  <FormControl mb="4" {...props}>
    <FormLabel fontWeight="semibold">{props.label}</FormLabel>
    <Input isReadOnly type="text" value={props.value} />
  </FormControl>
)

const Account: NextPage = () => {
  const user = UserState((state) => state.user)

  const profile = user?.profile

  return user ? (
    <Container maxW={1100}>
      <Heading textAlign="center">Account</Heading>
      <Divider />
      <Flex justify="space-around" flexWrap="wrap">
        <Box display="flex" minW={300} maxW={"90%"} m={5} flex={1}>
          <Stack m="auto" textAlign="center" spacing="5">
            <Avatar size="2xl" src={profile.picture} m="auto" />
            <BothLink href={`/profile/${user.username}`} fontSize="xl">
              @{user.username}
            </BothLink>
            <Button colorScheme="blue">Update Picture</Button>
          </Stack>
        </Box>
        <Box display="flex" minW={300} maxW={"90%"} m={5} flex={2}>
          <Stack m="auto" w="90%">
            <AccountItem label="Username" value={user.username} />
            <AccountItem label="Email" value={user.email} />
            <Button colorScheme="blue" m="auto">
              Reset Password
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Container>
  ) : (
    <>Loading...</>
  )
}

export default Account
