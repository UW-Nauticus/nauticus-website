/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Information() {
	return (
		<MKBox component="section" py={12}>
			<Container>
				<Grid container spacing={3} alignItems="center">
					<MKTypography variant="body1" color="text">
						The United Nations proclaimed a Decade of Ocean Science
						for Sustainable Development (2021-2030) to support
						efforts to reverse the cycle of decline in ocean health
						and to gather the global community behind a common goal:
						creating improved conditions for sustainable use and
						development of our world ocean.
					</MKTypography>
					<br />
					<MKTypography variant="body1" color="text">
						The ocean is the largest component of our planet’s
						ecosystem; it stabilizes climate and supports life on
						Earth and human well-being. However, the First World
						Ocean Assessment report released in 2016 found that much
						of the ocean is now seriously degraded, with changes and
						losses in the structure, function, and benefits from
						ocean systems.
					</MKTypography>
				</Grid>
			</Container>
		</MKBox>
	);
}

export default Information;
