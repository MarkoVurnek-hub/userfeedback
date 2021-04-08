import extendedTheme from "@/styles/theme";
import { Global, css } from "@emotion/react";
import { ProvideAuth } from "@/lib/auth";
import { ChakraProvider } from "@chakra-ui/react";

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
            //overflow: hidden;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .vis {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <ProvideAuth>
        <GlobalStyle />
        <Component {...pageProps} />
      </ProvideAuth>
    </ChakraProvider>
  );
}

export default MyApp;
