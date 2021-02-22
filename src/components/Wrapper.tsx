import { Box, BoxProps } from "@chakra-ui/react"

interface WrapperProps extends BoxProps {
  maxWidth?: number
}
export const Wrapper: React.FC<WrapperProps> = (props) => (
  <Box mt={8} mx="auto" maxW={props.maxWidth || 1100} w="95%" {...props}>
    {props.children}
  </Box>
)
