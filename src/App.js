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

function App() {
	return (
		<ThemeProvider theme={theme}>
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
