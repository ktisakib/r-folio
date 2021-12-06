import { Box, Container } from "@chakra-ui/layout";
import Head from "next/head";

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' width='device-width, initial-scale=1'></meta>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxW='container.xl' pt={14}>
        {children}
      </Container>
    </Box>
  );
};
export default Main;
