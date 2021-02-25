import { CheckCircleIcon, InfoIcon, WarningIcon } from "@chakra-ui/icons"
import { CloseButton, Flex, Heading, IconProps } from "@chakra-ui/react"
import React from "react"
import { RemoveAlertAction } from "../../../actions/AlertActions"
import { AlertType } from "../../../types/AlertType"

export const AlertObject: React.FC<{ alert: AlertType }> = ({ alert }) => {
  const LeftIcon: React.FC<IconProps> = (props) => {
    if (alert.color === "green.400") return <CheckCircleIcon {...props} />
    else if (alert.color === "blue.400") return <InfoIcon {...props} />
    else return <WarningIcon {...props} />
  }

  return (
    <Flex bg={alert.color} my={3} p={5} borderRadius={7.5} shadow="xl" position="relative" alignContent="center">
      <LeftIcon my="auto" />
      <Heading ml="2" mb="-2" size="sm">
        {alert.message}
      </Heading>
      <CloseButton
        position="absolute"
        right="3"
        top="auto"
        mt={-2.5}
        size="lg"
        onClick={() => RemoveAlertAction(alert.id)}
      />
    </Flex>
  )
}
