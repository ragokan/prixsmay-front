import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import { AppProps } from "next/app"
import MainContainer from "../components/utility/MainContainer"
import { NavComponent } from "../components/navigation/NavComponent"
import { Head } from "../components/navigation/links/Head"
import React from "react"
import { AlertHolder } from "../components/utility/alerts/AlertHolder"
import "../components/utility/DataFetcher"
import "../components/posts/markdown/MarkdownEditor.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MainContainer>
        <NavComponent />
        <Head />
        <AlertHolder />
        <Component {...pageProps} />
      </MainContainer>
    </ChakraProvider>
  )
}

export default MyApp
