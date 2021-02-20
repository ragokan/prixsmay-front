import { Text } from "@chakra-ui/react"
import { Hero } from "../components/Hero"
import { Container } from "../components/Container"
import { Main } from "../components/Main"
import { DarkModeSwitch } from "../components/DarkModeSwitch"

const Index = () => (
  <Container height="100vh">
    <Hero title="Prixsmay" />
    <Main>
      <Text align="center">Start</Text>
    </Main>
    <DarkModeSwitch />
  </Container>
)

export default Index
