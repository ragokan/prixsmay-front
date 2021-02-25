import { Button, Divider, Heading } from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import { FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { InputComponent } from "../../components/form/InputComponent"
import { Head } from "../../components/navigation/links/Head"
import { BothLink } from "../../components/utility/BothLink"
import { Container } from "../../components/utility/Container"
import { LoginBodyType } from "../../types/RequestBodyTypes"
import * as UserValidation from "../../validation/UserValidation"

const Login: React.FC = () => {
  const { handleSubmit, errors, register, formState } = useForm<LoginBodyType>({
    defaultValues: { email: "", password: "" },
  })

  const onSubmit = (values: LoginBodyType) => {
    console.log(values)
  }

  return (
    <Container maxW={800} m="auto">
      <Head title="Login" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading>Login</Heading>
        <Divider height="5" />

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
      <Divider height="5" />
      Don't have an account? Click to <BothLink href="/auth/register">Register!</BothLink>
    </Container>
  )
}

export default Login
