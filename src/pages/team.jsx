import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import MKBox from '../components/common/MKBox';
import MKTypography from '../components/common/MKTypography';
import rgba from '../assets/theme/functions/rgba';
import linearGradient from '../assets/theme/functions/linearGradient';
import routes from '../utils/routes/routes';
import IconLink from '../components/common/icons/IconLink';

// Sections
import Information from '../components/screens/team/Information';
import TeamMembers from '../components/screens/team/TeamMembers';
import Sponsors from '../components/screens/sponsors/SponsorsList';
import SubTeams from '../components/screens/team/SubTeams';

// Images
const bgImage = '/images/background/team.png';

function Team() {
  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { gradients } }) =>
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
              Meet the Team
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              The core of Angler Robotics.
            </MKTypography>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              {routes.socials.map((social) => (
                <IconLink key={social.name} name={social.name} href={social.href} p={1} size="3x" />
              ))}
            </MKBox>
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
        <Information />
        <SubTeams />
        <TeamMembers />
        <Sponsors />
      </Card>
    </>
  );
}

export default Team;
