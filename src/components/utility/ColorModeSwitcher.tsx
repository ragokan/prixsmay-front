import React from "react"
import { useColorMode, Switch, ThemeTypings, FormLabel, FormLabelProps } from "@chakra-ui/react"

export const ColorModeSwitcher: React.FC<FormLabelProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  return (
    <FormLabel htmlFor="cms" fontWeight="bold" {...props}>
      Dark Mode <Switch colorScheme={ColorProp} isChecked={isDark} onChange={toggleColorMode} float="right" />
    </FormLabel>
  )
}

type ColorPropType = ThemeTypings["colorSchemes"] | (string & {})
export const ColorProp: ColorPropType = "blue"
