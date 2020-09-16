import React from "react";
import { GlobalStyle } from "../Styled/GlobalStyle";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import Theme from "../Styled/Theme";
import Footer from "./Footer";
import Header from "./Header";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<Header />
				<div style={{ marginTop: "50px" }}>
					<Routes />
				</div>
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
