// react-router components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";

import theme from "assets/theme";

import About from "pages/About";
import Base from "pages/Base";
import Contact from "pages/Contact";
import faq from "pages/FAQ";
import Header from "pages/Header";
import SignUp from "pages/SignUp";
import Sponsors from "pages/Sponsors";

// Material Kit 2 React routes
// import routes from "routes";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
				integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
				crossOrigin="anonymous"
				referrerPolicy="no-referrer"
			/>
			<Router>
				<Routes>
					<Route path="*" element={<Base Child={Header} />} />
					<Route path="/about" element={<Base Child={About} />} />
					<Route path="/contact" element={<Base Child={Contact} />} />
					<Route path="/faq" element={<Base Child={faq} />} />
					<Route path="/join" element={<Base Child={SignUp} />} />
					<Route
						path="/sponsors"
						element={<Base Child={Sponsors} />}
					/>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
