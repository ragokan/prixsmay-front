import { Flex, IconButton, Text, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { CalculateSize } from "../../utils/CalculateSize"

interface VoteSingleProp {
  up?: boolean
  down?: boolean
}

interface VoteProps {
  isComment?: boolean
  isLoading?: VoteSingleProp
  isVoted?: VoteSingleProp
  totalVotes?: number
  onClick: {
    up: () => void
    down: () => void
  }
}
export const VoteComponent: React.FC<VoteProps> = ({
  isComment = false,
  isLoading = { up: false, down: false },
  onClick,
  isVoted = { up: false, down: false },
  totalVotes = 0,
}) => {
  const [isMobile] = useMediaQuery("(max-width: 800px)")

  let size = CalculateSize(isMobile, isComment)

  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr={isMobile ? 2 : 4}>
      <IconButton
        mb={1}
        isLoading={isLoading.up}
        aria-label="upVote"
        icon={<FaChevronUp />}
        size={size}
        onClick={onClick.up}
        colorScheme={isVoted.up ? "green" : "gray"}
      />
      <Text fontSize={size}>{totalVotes}</Text>
      <IconButton
        mt={1}
        isLoading={isLoading.down}
        aria-label="downVote"
        icon={<FaChevronDown />}
        size={size}
        onClick={onClick.down}
        colorScheme={isVoted.down ? "red" : "gray"}
      />
    </Flex>
  )
}
