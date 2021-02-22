import { FormControl, FormLabel, Input, FormHelperText, InputProps } from "@chakra-ui/react"
import React, { InputHTMLAttributes } from "react"
import { DeepMap, FieldError } from "react-hook-form"

interface MyInput extends InputProps {
  errors?: DeepMap<any, FieldError>
  label: string
  helperText?: string
}

export const InputComponent = React.forwardRef<HTMLInputElement, MyInput>((props, ref) => {
  return (
    <>
      <FormControl id={props.id}>
        <FormLabel>{props.label}</FormLabel>
        <Input type={props.type} ref={ref} {...props} />
        {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
        {props.name && props.errors[props.name] && <p>{props.errors[props.name].message}</p>}
      </FormControl>
    </>
  )
})
