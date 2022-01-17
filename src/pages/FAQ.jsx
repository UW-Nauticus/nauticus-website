// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import CenteredFooter from "examples/Footers/CenteredFooter";

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

const QAndAs = [
	{ question: "is allen good at math", answer: "pre good" },
	{ question: "how big is Adrian", answer: "big enough" },
	{ question: "can I join", answer: "ok" },
];

const FAQ = () => {
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
							Frequently Asked Questions
						</MKTypography>
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
				{QAndAs.map((entry) => (
					<MKBox
						width="100%"
						sx={{
							backgroundSize: "cover",
							backgroundPosition: "center",
							display: "grid",
							placeItems: "center",
						}}
					>
						<MKTypography
							variant="h3"
							color="black"
							sx={({ breakpoints, typography: { size } }) => ({
								[breakpoints.down("md")]: {
									fontSize: size["3xl"],
								},
							})}
						>
							{entry.question}
						</MKTypography>
						<MKTypography
							variant="body2"
							color="black"
							sx={({ breakpoints, typography: { size } }) => ({
								[breakpoints.down("md")]: {
									fontSize: size["3xl"],
								},
							})}
						>
							{entry.answer}
						</MKTypography>
					</MKBox>
				))}
			</Card>
			<MKBox pt={6} px={1} mt={6}>
				<CenteredFooter content={footerRoutes} />
			</MKBox>
		</>
	);
};

export default FAQ;
