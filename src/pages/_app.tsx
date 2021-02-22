import { ChakraProvider } from "@chakra-ui/react"

import theme from "../theme"
import { AppProps } from "next/app"
import MainContainer from "../components/MainContainer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ChakraProvider>
  )
}

export default MyApp
