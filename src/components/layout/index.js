import Container from "@mui/material/Container";

import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
}