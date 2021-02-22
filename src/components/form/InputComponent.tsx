import React, { InputHTMLAttributes } from "react"
import { DeepMap, FieldError } from "react-hook-form"

interface MyInput extends InputHTMLAttributes<HTMLInputElement> {
  errors: DeepMap<any, FieldError>
}

export const InputComponent = React.forwardRef<HTMLInputElement, MyInput>((props, ref) => {
  return (
    <>
      <input ref={ref} {...props} />
      {props.name && props.errors[props.name] && <p>{props.errors[props.name].message}</p>}
    </>
  )
})

// <InputComponent
// ref={register({ minLength: { value: 3, message: "It is so small" } })}
// name="rago"
// placeholder="Example"
// errors={errors}
// />
