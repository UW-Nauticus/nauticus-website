import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import MUISwitch from "components/MuiSwitch";

const TopAppBar = ({ dark, setDark }) => {
	const toggleSwitch = () => {
		setDark(!dark);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" style={{ height: "64px" }}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, marginLeft: "100px" }}
					>
						LOGO
					</Typography>
					<div style={{ display: "flex", marginRight: "100px" }}>
						<Button color="inherit">About</Button>
						<Button color="inherit">Teams</Button>
						<Button color="inherit">Sponsors</Button>
						<Button color="inherit">FAQ</Button>
						<Button color="inherit">Contact</Button>
						<MUISwitch defaultChecked toggleSwitch={toggleSwitch} />
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default TopAppBar;
