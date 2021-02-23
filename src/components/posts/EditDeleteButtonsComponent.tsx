import { useMediaQuery, Link, Flex, IconButton } from "@chakra-ui/react"
import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import { CalculateSize } from "../../utils/CalculateSize"

interface EditDeleteButtonProps {
  isComment?: boolean
  onClick: {
    edit: () => void
    delete: () => void
  }
}

export const EditDeleteButtons: React.FC<EditDeleteButtonProps> = ({ isComment = false, onClick }) => {
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  let size = CalculateSize(isMobile, isComment)

  return (
    <Flex direction={isMobile ? "column" : "row"} justifyContent="center" alignItems="center">
      <IconButton
        as={Link}
        mr={isMobile ? 0 : 4}
        mb={isMobile ? 3 : 0}
        icon={<FaEdit />}
        aria-label="Edit Post"
        size={size}
        onClick={onClick.edit}
      />
      <IconButton icon={<FaTrash />} aria-label="Delete Post" size={size} onClick={onClick.delete} />
    </Flex>
  )
}
