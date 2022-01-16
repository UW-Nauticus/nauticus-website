// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/bg-coworking.jpeg";

import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	return (
		<MKBox
			display="flex"
			alignItems="center"
			minHeight="100vh"
			sx={{
				backgroundImage: ({
					palette: { gradients },
					functions: { linearGradient, rgba },
				}) =>
					`${linearGradient(
						rgba(gradients.dark.main, 0.5),
						rgba(gradients.dark.state, 0.5)
					)}, url(${bgImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Container>
				<Grid
					container
					item
					xs={12}
					md={7}
					lg={6}
					flexDirection="column"
					justifyContent="center"
				>
					<MKTypography
						variant="h1"
						color="white"
						mb={3}
						sx={({ breakpoints, typography: { size } }) => ({
							[breakpoints.down("md")]: {
								fontSize: size["3xl"],
							},
						})}
					>
						UW Nauticus
					</MKTypography>
					<MKTypography
						variant="body1"
						color="white"
						opacity={0.8}
						pr={6}
						mr={6}
					>
						We make submarine go brr.
					</MKTypography>
					<Stack direction="row" spacing={1} mt={3}>
						<MKButton
							onClick={() => navigate("/join")}
							color="white"
						>
							Join Us
						</MKButton>
						<MKButton
							onClick={() => navigate("/about")}
							variant="text"
							color="white"
						>
							Learn More
						</MKButton>
					</Stack>
				</Grid>
			</Container>
		</MKBox>
	);
}

export default Header;
