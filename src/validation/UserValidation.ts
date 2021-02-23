import { RegisterOptions } from "react-hook-form"

type VT = RegisterOptions

const EmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const EmailValidation: VT = {
  pattern: { message: "Please enter a valid email!", value: EmailRegex },
  minLength: { value: 5, message: "Please enter a valid email!" },
  required: { value: true, message: "Please enter a email!" },
}

export const PasswordValidation: VT = {
  required: { value: true, message: "Please enter a password!" },
  minLength: { value: 5, message: "Please enter a password that longer than 5 characters!" },
}

export const UsernameValidation: VT = {
  required: { value: true, message: "Please enter an username!" },
  minLength: { value: 3, message: "Please enter an username that longer than 3 characters!" },
}
