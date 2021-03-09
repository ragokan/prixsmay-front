import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { UpdateProfilePictureAction } from "../../actions/ProfileActions";
import { DefaultProfilePictureSelector } from "../../components/form/DefaultProfilePictureSelector";
import { Container } from "../../components/utility/Container";

const UpdateProfilePicture: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>();
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [file, setFile] = useState<File>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const submitForm = async () => {
    setIsLoading(true);
    const callback = () => router.push("/user/account");
    file
      ? await UpdateProfilePictureAction({ image: file, callback })
      : await UpdateProfilePictureAction({ pictureUrl: profilePicture, callback });
    setIsLoading(false);
  };

  return (
    <>
      <Container maxW={800} m="auto">
        <Tabs isFitted>
          <TabList>
            <Tab onClick={() => setFile(null)}>Select From Defaults</Tab>
            <Tab>Upload New Picture</Tab>
          </TabList>

          <TabPanels>
            <TabPanel textAlign="center">
              {/* FIRST PANEL */}
              <DefaultProfilePictureSelector
                profilePicture={profilePicture}
                setProfilePicture={setProfilePicture}
                hideTexts
              />
              <Button colorScheme="blue" type="submit" onClick={() => submitForm()} isLoading={isLoading}>
                Update
              </Button>
            </TabPanel>
            <TabPanel>
              {/* SECOND PANEL */}
              <FormControl isRequired>
                <FormLabel htmlFor="writeUpFile">Upload</FormLabel>
                <InputGroup mb="3" onClick={() => inputRef.current.click()}>
                  <InputLeftElement pointerEvents="none" children={<Icon as={BsImageFill} fontSize="xl" />} />
                  <input
                    type="file"
                    ref={inputRef}
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <Input value={file ? file.name + " is currently selected." : "Click to upload image!"} readOnly />
                </InputGroup>
              </FormControl>
              <Button
                colorScheme="blue"
                type="submit"
                disabled={!file}
                onClick={() => submitForm()}
                isLoading={isLoading}
              >
                Update
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};

export default UpdateProfilePicture;
