import Base from "components/Base.jsx";
import AppBar from "components/AppBar";
import { lightTheme, darkTheme } from "theme/Themes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

function App() {
	const [dark, setDark] = useState(true);

	return (
		<ThemeProvider theme={createTheme(lightTheme)}>
			<AppBar dark={dark} setDark={setDark} />
			<Base />
		</ThemeProvider>
	);
}

export default App;
