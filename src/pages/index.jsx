import React from 'react';
import Link from 'next/link';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// Material Kit 2 React components
import MKBox from '../components/common/MKBox';
import MKButton from '../components/common/MKButton';
import MKTypography from '../components/common/MKTypography';

// Images
const bgImage = '/images/bg-coworking.jpeg';

function Header() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
          <MKTypography
            variant="h1"
            color="white"
            mb={3}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down('md')]: {
                fontSize: size['3xl'],
              },
            })}
          >
            Angler Robotics
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
            We make submarine go brr.
          </MKTypography>
          <Stack direction="row" spacing={1} mt={3}>
            <Link href="/join" passHref>
              <MKButton color="white">Join Us</MKButton>
            </Link>
            <Link href="/about" passHref>
              <MKButton variant="text" color="white">
                Learn More
              </MKButton>
            </Link>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Header;
