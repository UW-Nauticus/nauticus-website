import React from "react";
import { styled } from "@mui/system";
const temp = require("images/temp.jpeg");

const Dashboard = styled("div")(
	({ theme }) => `
		background-color: ${theme.palette.background.default};
		min-height: calc(100vh - 64px);
	`
);

const Base = () => {
	return (
		<Dashboard>
			<img src={temp} alt="Err" width="100%" height="200px" />
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
		</Dashboard>
	);
};

export default Base;
