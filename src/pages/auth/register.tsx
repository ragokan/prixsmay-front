import React from "react"
import { useForm } from "react-hook-form"
import { Wrapper } from "../../components/utility/Wrapper"

const Register: React.FC = () => {
  const { handleSubmit, errors, register, formState } = useForm()
  return (
    <Wrapper>
      <h1>Hello</h1>
    </Wrapper>
  )
}

export default Register
