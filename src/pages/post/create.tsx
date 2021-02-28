import { Button, Divider, FormLabel, Heading } from "@chakra-ui/react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { InputComponent } from "../../components/form/InputComponent"
import { Head } from "../../components/navigation/links/Head"
import { MarkdownEditor } from "../../components/posts/markdown/MarkdownEditor"
import { Container } from "../../components/utility/Container"

const CreatePost: NextPage = () => {
  const [content, setContent] = useState<string>("")
  const router = useRouter()
  const { handleSubmit, errors, register, formState } = useForm({
    defaultValues: { title: "" },
  })

  return (
    <Container maxW={800} m="auto">
      <Head title="Create Post" />
      <form>
        <Heading>Create Post</Heading>
        <Divider height="5" />
        <InputComponent label="Title" placeholder="Title" ref={register()} name="title" errors={errors} type="text" />
        <FormLabel>Content</FormLabel>
        <MarkdownEditor value={content} setValue={setContent} />
        <Divider height="5" />
        <Button colorScheme="blue" type="submit" isLoading={formState.isSubmitting}>
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default CreatePost
