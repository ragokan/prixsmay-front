import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputProps,
  Alert,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react"
import React from "react"
import { DeepMap, FieldError } from "react-hook-form"

interface MyInput extends InputProps {
  errors?: DeepMap<any, FieldError>
  label: string
  helperText?: string
  inputChildElement?: JSX.Element
}

export const InputComponent = React.forwardRef<HTMLInputElement, MyInput>((props, ref) => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  let type = props.type
  if (props.type && props.type === "password") type = show ? "text" : "password"

  return (
    <>
      <FormControl id={props.id} mb={7}>
        <FormLabel>{props.label}</FormLabel>
        <InputGroup>
          {props.inputChildElement && (
            <InputLeftElement pointerEvents="none" children={props.inputChildElement} color="gray" />
          )}
          <Input ref={ref} {...props} type={type} />
          {props.type && props.type === "password" && (
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
        {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
        {props.name && props.errors[props.name] && (
          <Alert status="error" fontSize="sm" my={2} borderRadius={5}>
            {props.errors[props.name].message}
          </Alert>
        )}
      </FormControl>
    </>
  )
})
