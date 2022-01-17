// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

const SignUp = () => {
	return (
		<>
			<MKBox
				minHeight="100vh"
				width="100%"
				sx={{
					backgroundImage: ({
						functions: { linearGradient, rgba },
						palette: { gradients },
					}) =>
						`${linearGradient(
							rgba(gradients.dark.main, 0.6),
							rgba(gradients.dark.state, 0.6)
						)}, url(${bgImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					display: "grid",
					placeItems: "center",
				}}
			>
				<MKBox px={1} width="100%" mx="auto" position="relative">
					<Grid
						container
						spacing={1}
						justifyContent="center"
						alignItems="center"
						height="100%"
					>
						<Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
							<Card>
								<MKBox
									variant="gradient"
									bgColor="info"
									borderRadius="lg"
									coloredShadow="info"
									mx={2}
									mt={-3}
									p={2}
									mb={1}
									textAlign="center"
								>
									<MKTypography
										variant="h4"
										fontWeight="medium"
										color="white"
										mt={1}
									>
										Sign in
									</MKTypography>

									<MKTypography variant="body2" color="white">
										Enter your email to gain access to all
										our team's resources
									</MKTypography>
								</MKBox>
								<MKBox pt={4} pb={3} px={3}>
									<MKBox component="form" role="form">
										<MKBox mb={2}>
											<MKInput
												type="email"
												label="Email"
												fullWidth
											/>
										</MKBox>

										<MKBox
											display="flex"
											alignItems="center"
											ml={-1}
										></MKBox>
										<MKBox mt={4} mb={1}>
											<MKButton
												variant="gradient"
												color="info"
												fullWidth
											>
												Sign Up
											</MKButton>
										</MKBox>
									</MKBox>
								</MKBox>
							</Card>
						</Grid>
					</Grid>
				</MKBox>
			</MKBox>
		</>
	);
};
export default SignUp;
