import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Main = styled('div')({
  padding: '30px 0',
});

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
      <Footer />
    </>
  );
}