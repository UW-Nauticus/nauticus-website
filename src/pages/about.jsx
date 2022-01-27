import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material Kit 2 React components
import MKBox from '../components/common/MKBox';
import MKTypography from '../components/common/MKTypography';

// Material Kit 2 React examples
import CenteredFooter from '../components/layout/Footer';

// About Us page sections
import Information from '../components/screens/about/Information';
import TeamMembers from '../components/screens/about/TeamMembers';
import Sponsors from '../components/screens/sponsors/SponsorsList';
import Newsletter from '../components/common/Newsletter.js/Newsletter';
import SubTeams from '../components/screens/about/SubTeams';

// Images
const bgImage = '/images/bg-about-us.jpg';

function About() {
  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(rgba(gradients.dark.main, 0.6), rgba(gradients.dark.state, 0.6))}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center',
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
            sx={{ mx: 'auto', textAlign: 'center' }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
            >
              About Us
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We build water robot. Scroll down to learn about the team and competition.
            </MKTypography>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <FontAwesomeIcon color="white" icon={['fab', 'facebook']} size="2x" />
              </MKTypography>
              {/* TODO add instagram link */}
              <MKTypography
                component="a"
                target="_blank" // opens in new tab
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <MKBox component={FontAwesomeIcon} color="white" icon={['fab', 'instagram']} size="2x" />
              </MKTypography>
              <MKTypography
                component="a"
                target="_blank" // opens in new tab
                variant="body1"
                color="white"
                href="https://github.com/UW-Nauticus"
                mr={3}
              >
                <MKBox component={FontAwesomeIcon} color="white" icon={['fab', 'github']} size="2x" />
              </MKTypography>
              <MKTypography
                component="a"
                target="_blank" // opens in new tab
                variant="body1"
                color="white"
                href="https://www.youtube.com/channel/UClLen4WNvXr1UgWIkF67nTw"
              >
                <MKBox component={FontAwesomeIcon} color="white" icon={['fab', 'youtube']} size="2x" />
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
        <SubTeams />
        <TeamMembers />
        <Sponsors />
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter />
      </MKBox>
    </>
  );
}

export default About;
