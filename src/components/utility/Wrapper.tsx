import { Box, BoxProps } from "@chakra-ui/react"

interface WrapperProps extends BoxProps {
  maxWidth?: number
}
export const Wrapper: React.FC<WrapperProps> = (props) => (
  <Box mt={8} mx="auto" maxW={props.maxWidth || 1000} w="95%" {...props} minH="92.5vh">
    {props.children}
  </Box>
)
