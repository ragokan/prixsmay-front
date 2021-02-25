import { Button, Divider, Heading } from "@chakra-ui/react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { FaLock, FaUserCircle } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { DefaultProfilePictureSelector } from "../../components/form/DefaultProfilePictureSelector"
import { InputComponent } from "../../components/form/InputComponent"
import { Head } from "../../components/navigation/links/Head"
import { BothLink } from "../../components/utility/BothLink"
import { Container } from "../../components/utility/Container"
import { RegisterBodyType } from "../../types/RequestBodyTypes"
import * as UserValidation from "../../validation/UserValidation"

const Register: React.FC = () => {
  const { handleSubmit, errors, register, formState } = useForm<RegisterBodyType>({
    defaultValues: { email: "", password: "", username: "" },
  })
  const [profilePicture, setProfilePicture] = useState<string>("")

  const onSubmit = (values: RegisterBodyType) => {
    const postValue = { ...values, pictureUrl: profilePicture }
    console.log(postValue)
  }

  return (
    <Container maxW={800} m="auto">
      <Head title="Register" />
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
        <DefaultProfilePictureSelector profilePicture={profilePicture} setProfilePicture={setProfilePicture} />

        <Button colorScheme="blue" type="submit" isLoading={formState.isSubmitting}>
          Submit
        </Button>
      </form>
      <Divider height="5" />
      Already an user? Click to <BothLink href="/auth/login">Login!</BothLink>
    </Container>
  )
}

export default Register
