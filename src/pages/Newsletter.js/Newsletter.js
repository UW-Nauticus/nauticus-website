/* eslint-disable react/jsx-no-duplicate-props */
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
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

function Newsletter() {
	return (
		<MKBox component="section" my={6}>
			<Container>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
				>
					<Grid item>
						<MKTypography variant="h3">
							News {"&"} Updates
						</MKTypography>
						<MKTypography variant="body2" color="text" mb={3}>
							Add your email to our mailing list to learn about
							fun events and team milestones.
						</MKTypography>
						<Grid container spacing={1}>
							<Grid item xs={8}>
								<MKInput
									type="email"
									label="Email Here..."
									fullWidth
								/>
							</Grid>
							<Grid item xs={4}>
								<MKButton
									variant="gradient"
									color="info"
									sx={{ height: "100%" }}
								>
									Subscribe
								</MKButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</MKBox>
	);
}

export default Newsletter;
