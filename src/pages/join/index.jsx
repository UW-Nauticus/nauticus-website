import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import MKBox from '../../components/common/MKBox';
import MKTypography from '../../components/common/MKTypography';

// Sections
import JoinIntro from '../../components/screens/join/JoinIntro';
import GoogleForm from '../../components/screens/join/GoogleForm';

// Images
const bgImage = '/images/background/join.jpg';

function Join() {
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
              Join Us!
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Let&apos;s build robots together.
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
        <MKBox component="section" sx={{ pt: { xs: 5, sm: 10, md: 12 } }}>
          <Container>
            <Grid container>
              <JoinIntro />
            </Grid>
          </Container>
        </MKBox>
        <GoogleForm />
      </Card>
    </>
  );
}

export default Join;
