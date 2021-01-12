import '../styles/index.css'
import * as React from "react"
import Head from "next/head";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <ChakraProvider>
      <Head>
      <title>Sternah - Agency Performance</title>
      <meta property="og:title" content="Home" key="title" />
        <link rel="shortcut icon" href="/global/favicon-01.svg" />
      </Head> 
      <Component {...pageProps} />
     
      
      </ChakraProvider>
      
    </>
  );
}

export default MyApp;