import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import MKBox from '../components/common/MKBox';
import MKTypography from '../components/common/MKTypography';

// Sections
import WhySponsor from '../components/screens/sponsors/WhySponsor';
import Sponsors from '../components/screens/sponsors/SponsorsList';
import TextLink from '../components/common/TextLink';

// Images
const bgImage = '/images/background/sponsors.png';

function SponsorPage() {
  const sponsorEmailLink = (
    <TextLink href="mailto:sponsor@angler-robotics.com" text="sponsor@angler-robotics.com" contrast />
  );

  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(rgba(gradients.primary.main, 0.2), rgba(gradients.primary.state, 0.7))}, url(${bgImage})`,
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
            sx={{ py: { xs: 10, sm: 20, md: 0 }, mx: 'auto', px: { xs: 2, sm: 0 }, textAlign: 'center' }}
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
              dreamy-eyed students and a team working on a functional ROV. They’ve played a key role in our team’s every
              success, and we depend on them to make our vision possible. We’re incredibly grateful to all of our
              sponsors for their generous support. <br />
              <br />
              If you’re interested in what we’re building and would like to support us, please get in touch at{' '}
              {sponsorEmailLink}!
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 8,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <WhySponsor />
        <Sponsors />
      </Card>
    </>
  );
}

export default SponsorPage;
