import Container from "@mui/material/Container";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>
				<Container>
					{children}
				</Container>
			</main>
			<Footer />
		</>
	)
}