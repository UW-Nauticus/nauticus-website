import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Kit 2 React components
import MKBox from '../../components/MKBox';
import MKTypography from '../../components/MKTypography';

// Material Kit 2 React examples
import CenteredFooter from '../Footers';

// About Us page sections
import WhySponsor from './WhySponsor';
import Sponsors from './SponsorsList';

// Routes
import footerRoutes from '../../footer.routes';

// Images
import bgImage from '../../assets/images/bg-about-us.jpg';

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
              Our Sponsors
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              This team would not be possible without our sponsors. Our sponsors are the difference between a group of
              dreamy-eyed students and a team working on a functional ROV drone. They’ve played a key role in our team’s
              every success, and we depend on them to make our vision possible. We’re incredibly grateful to all of our
              sponsors for their generous support. If you’re interested in what we’re building and would like to support
              us, please get in touch at uwnauticus@gmail.com!
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
        <WhySponsor />
        <Sponsors />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default About;
