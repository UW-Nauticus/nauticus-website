// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import CenteredFooter from "examples/Footers/CenteredFooter";

// About Us page sections
import Information from "pages/LandingPages/About/sections/Information";
import Team from "pages/LandingPages/About/sections/Team";
import Sponsors from "pages/LandingPages/About/sections/Sponsors";
import Newsletter from "pages/LandingPages/About/sections/Newsletter";

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function About() {
	return (
		<>
			<MKBox
				minHeight="75vh"
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
				<Container>
					<Grid
						container
						item
						xs={12}
						lg={8}
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						sx={{ mx: "auto", textAlign: "center" }}
					>
						<MKTypography
							variant="h1"
							color="white"
							sx={({ breakpoints, typography: { size } }) => ({
								[breakpoints.down("md")]: {
									fontSize: size["3xl"],
								},
							})}
						>
							About Us
						</MKTypography>
						<MKTypography
							variant="body1"
							color="white"
							opacity={0.8}
							mt={1}
							mb={3}
						>
							We build water robot. Scroll down to learn about the
							team and competition.
						</MKTypography>
						<MKTypography variant="h6" color="white" mt={8} mb={1}>
							Find us on
						</MKTypography>
						<MKBox
							display="flex"
							justifyContent="center"
							alignItems="center"
						>
							<MKTypography
								component="a"
								variant="body1"
								color="white"
								href="#"
								mr={3}
							>
								<i className="fab fa-facebook" />
							</MKTypography>
							<MKTypography
								component="a"
								variant="body1"
								color="white"
								href="#"
								mr={3}
							>
								<i className="fab fa-instagram" />
							</MKTypography>
							<MKTypography
								component="a"
								variant="body1"
								color="white"
								href="#"
								mr={3}
							>
								<i className="fab fa-discord" />
							</MKTypography>
							<MKTypography
								component="a"
								variant="body1"
								color="white"
								href="#"
							>
								<i className="fab fa-github" />
							</MKTypography>
						</MKBox>
					</Grid>
				</Container>
			</MKBox>
			<Card
				sx={{
					p: 2,
					mx: { xs: 2, lg: 3 },
					mt: -8,
					mb: 4,
					boxShadow: ({ boxShadows: { xxl } }) => xxl,
				}}
			>
				<Information />
				<Team />
				<Sponsors />
				<Newsletter />
			</Card>
			<MKBox pt={6} px={1} mt={6}>
				<CenteredFooter content={footerRoutes} />
			</MKBox>
		</>
	);
}

export default About;
