import { Box, Button, Divider, Heading, useColorMode } from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"
import { MdEmail } from "react-icons/md"
import { InputComponent } from "../../components/form/InputComponent"
import { Wrapper } from "../../components/utility/Wrapper"

interface RegisterFormTypes {
  email: string
  password: string
}

const Register: React.FC = () => {
  const { handleSubmit, errors, register, formState } = useForm<RegisterFormTypes>()
  const { colorMode } = useColorMode()

  const onSubmit = (values: RegisterFormTypes) => {
    console.log(values)
  }

  return (
    <Wrapper>
      <Box backgroundColor={colorMode !== "dark" ? "white" : "black"} p={10} borderRadius={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading>Register</Heading>
          <Divider height="5" />
          <InputComponent
            label="Email"
            placeholder="Email"
            name="email"
            isRequired
            ref={register}
            errors={errors}
            inputChildElement={<MdEmail />}
            type="email"
          />
          <InputComponent
            label="password"
            placeholder="password"
            name="password"
            isRequired
            ref={register({ minLength: { message: "Lan length", value: 5 } })}
            errors={errors}
            type="password"
          />
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Wrapper>
  )
}

export default Register
