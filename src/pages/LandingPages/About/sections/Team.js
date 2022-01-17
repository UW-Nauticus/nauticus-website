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

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import adam_barosso from "assets/images/team/adam_barosso.jpeg";
import allen_zhang from "assets/images/team/allen_zhang.jpeg";
import adrian_jendo from "assets/images/team/adrian_jendo.jpeg";
import cameron_kinsella from "assets/images/team/cameron_kinsella.jpeg";

function Team() {
	return (
		<MKBox
			component="section"
			variant="gradient"
			bgColor="dark"
			position="relative"
			py={6}
			px={{ xs: 2, lg: 0 }}
			mx={-2}
		>
			<Container>
				<Grid container>
					<Grid item xs={12} md={8} sx={{ mb: 6 }}>
						<MKTypography variant="h3" color="white">
							Meet the Team Leads
						</MKTypography>
						<MKTypography
							variant="body2"
							color="white"
							opacity={0.8}
						>
							We have a group of dedicated students putting in
							countless hours to make our team thrive and guide
							the next generation of leads.
						</MKTypography>
					</Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={12} lg={6}>
						<MKBox mb={1}>
							<HorizontalTeamCard
								image={cameron_kinsella}
								name="Cameron Kinsella"
								position={{
									color: "info",
									label: "Team Captain",
								}}
								description="Likes Anime Girls. Certified Chad."
								linkedin="cameronkinsella"
							/>
						</MKBox>
					</Grid>
					<Grid item xs={12} lg={6}>
						<MKBox mb={1}>
							<HorizontalTeamCard
								image={adrian_jendo}
								name="Adrian Jendo"
								position={{
									color: "info",
									label: "Operations Manager",
								}}
								description="Twice nominated sexiest man alive. Also knows how to juggle."
								linkedin="adrian-jendo"
							/>
						</MKBox>
					</Grid>
					<Grid item xs={12} lg={6}>
						<MKBox mb={{ xs: 1, lg: 0 }}>
							<HorizontalTeamCard
								image={adam_barosso}
								name="Adam Barroso"
								position={{
									color: "info",
									label: "Software (& hardware?) Lead",
								}}
								description="Short and sweet like all Italians should be."
								linkedin="adam-barroso-804357172"
							/>
						</MKBox>
					</Grid>
					<Grid item xs={12} lg={6}>
						<MKBox mb={{ xs: 1, lg: 0 }}>
							<HorizontalTeamCard
								image={allen_zhang}
								name="Allen Zhang"
								position={{
									color: "info",
									label: "Mechanical Lead",
								}}
								description="Goes on many dates."
								linkedin="allen-zhang-5764b8189"
							/>
						</MKBox>
					</Grid>
				</Grid>
			</Container>
		</MKBox>
	);
}

export default Team;
