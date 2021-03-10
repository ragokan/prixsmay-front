import { Button, Divider, FormLabel, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputComponent } from "../../components/form/InputComponent";
import { Head } from "../../components/navigation/links/Head";
import { MarkdownEditor } from "../../components/posts/markdown/MarkdownEditor";
import { AuthRequired } from "../../components/utility/auth/AuthRequired";
import { Container } from "../../components/utility/Container";

const CreatePost: NextPage = () => {
  AuthRequired();
  const [content, setContent] = useState<string>("");
  const { handleSubmit, errors, register, formState } = useForm({
    defaultValues: { title: "" },
  });

  const onSubmit = async () => {};

  return (
    <Container maxW={800} m="auto">
      <Head title="Create Post" />
      <form onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default CreatePost;
