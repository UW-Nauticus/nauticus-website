// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import bgImage from "assets/images/illustration-reset.jpg";

const Contact = () => {
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
				<MKBox width="100%" mx="auto" position="relative">
					<Grid
						container
						spacing={1}
						justifyContent="center"
						alignItems="center"
						height="100%"
					>
						<Grid item xs={11} sm={9} md={5} lg={4} xl={6}>
							<Card>
								<MKBox
									variant="gradient"
									bgColor="info"
									coloredShadow="info"
									borderRadius="lg"
									p={2}
									mx={2}
									mt={-3}
								>
									<MKTypography variant="h3" color="white">
										Contact us
									</MKTypography>
								</MKBox>
								<MKBox p={3}>
									<MKTypography
										variant="body2"
										color="text"
										mb={3}
									>
										You can send us an email by filling out
										the form below. Follow us on Social
										Media for updates!
									</MKTypography>
									<MKBox
										width="100%"
										component="form"
										method="post"
										autocomplete="off"
									>
										<Grid container spacing={3}>
											<Grid item xs={12} md={6}>
												<MKInput
													variant="standard"
													label="First Name"
													InputLabelProps={{
														shrink: true,
													}}
													fullWidth
												/>
											</Grid>
											<Grid item xs={12} md={6}>
												<MKInput
													variant="standard"
													label="Last Name"
													InputLabelProps={{
														shrink: true,
													}}
													fullWidth
												/>
											</Grid>
											<Grid item xs={12} md={6}>
												<MKInput
													type="email"
													variant="standard"
													label="Email"
													InputLabelProps={{
														shrink: true,
													}}
													fullWidth
												/>
											</Grid>
											<Grid item xs={12} md={6}>
												<MKInput
													variant="standard"
													label="Subject"
													InputLabelProps={{
														shrink: true,
													}}
													fullWidth
												/>
											</Grid>
											<Grid item xs={12}>
												<MKInput
													variant="standard"
													label="How can we help you?"
													placeholder="Your Message"
													InputLabelProps={{
														shrink: true,
													}}
													multiline
													fullWidth
													rows={6}
												/>
											</Grid>
										</Grid>
										<Grid
											container
											item
											justifyContent="center"
											xs={12}
											mt={5}
											mb={2}
										>
											<MKButton
												type="submit"
												variant="gradient"
												color="info"
											>
												Send Message
											</MKButton>
										</Grid>
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

export default Contact;
