import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import { AppProps } from "next/app"
import MainContainer from "../components/utility/MainContainer"
import { NavComponent } from "../components/navigation/NavComponent"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MainContainer>
        <NavComponent />
        <Component {...pageProps} />
      </MainContainer>
    </ChakraProvider>
  )
}

export default MyApp
