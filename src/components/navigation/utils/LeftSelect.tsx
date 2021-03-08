import { Select } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { FaFilter } from "react-icons/fa"

export const LeftSelect: React.FC<{ isPhone: boolean }> = ({ isPhone }) => {
  const { push, asPath } = useRouter()
  return (
    <Select
      maxWidth={isPhone ? 100 : 200}
      icon={<FaFilter />}
      colorScheme="gray"
      size="sm"
      iconSize="sm"
      fontSize={isPhone ? "xs" : "sm"}
      value={asPath || "/"}
      onChange={(e) => push(e.target.value)}
      ml={isPhone ? 2 : 10}
      mr={isPhone ? 2 : 5}
    >
      <option value="/">Home</option>
      <option value="/popular">Popular</option>
      <option value="/topCommunities">Top Communities</option>
      <option value={asPath}>{asPath.substring(1)}</option>
    </Select>
  )
}
