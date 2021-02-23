import { Button, Divider, Heading } from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import { FaLock, FaUserCircle } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { InputComponent } from "../../components/form/InputComponent"
import { Container } from "../../components/utility/Container"
import * as UserValidation from "../../validation/UserValidation"

interface RegisterFormTypes {
  email: string
  password: string
}

const Register: React.FC = () => {
  const { handleSubmit, errors, register, formState } = useForm<RegisterFormTypes>()

  const onSubmit = (values: RegisterFormTypes) => {
    console.log(values)
  }
  console.log("change")

  return (
    <Container maxW={800} m="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading>Register</Heading>
        <Divider height="5" />
        <InputComponent
          label="Username"
          placeholder="Username"
          name="username"
          isRequired
          ref={register(UserValidation.UsernameValidation)}
          errors={errors}
          inputChildElement={<FaUserCircle />}
          type="text"
        />
        <InputComponent
          label="Email"
          placeholder="Email"
          name="email"
          isRequired
          ref={register(UserValidation.EmailValidation)}
          errors={errors}
          inputChildElement={<MdEmail />}
          type="email"
        />
        <InputComponent
          label="Password"
          placeholder="Password"
          name="password"
          isRequired
          ref={register(UserValidation.PasswordValidation)}
          errors={errors}
          type="password"
          inputChildElement={<FaLock />}
        />
        <Button colorScheme="blue" type="submit" isLoading={formState.isSubmitting}>
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default Register
