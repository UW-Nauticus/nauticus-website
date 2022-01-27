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
import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';

// Material Kit 2 React examples
import TeamCard from './TeamCards';

// Images
const adamBarroso = '/images/team/adam_barroso.jpeg';
const allenZhang = '/images/team/allen_zhang.jpeg';
const adrianJendo = '/images/team/adrian_jendo.jpeg';
const cameronKinsella = '/images/team/cameron_kinsella.jpeg';

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
          <Grid item xs={12} md={12} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Meet the Team Leads
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              We have a group of dedicated students putting in countless hours to make our team thrive and guide the
              next generation of leads.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <TeamCard
                image={cameronKinsella}
                name="Cameron Kinsella"
                position={{
                  color: 'info',
                  label: 'Team Captain',
                }}
                description="Likes Anime Girls. Certified Chad."
                linkedin="cameronkinsella"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <TeamCard
                image={adrianJendo}
                name="Adrian Jendo"
                position={{
                  color: 'info',
                  label: 'Operations Manager',
                }}
                description="Twice nominated sexiest man alive. Also knows how to juggle."
                linkedin="adrian-jendo"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <TeamCard
                image={adamBarroso}
                name="Adam Barroso"
                position={{
                  color: 'info',
                  label: 'Software (& hardware?) Lead',
                }}
                description="Short and sweet like all Italians should be."
                linkedin="adam-barroso-804357172"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <TeamCard
                image={allenZhang}
                name="Allen Zhang"
                position={{
                  color: 'info',
                  label: 'Mechanical Lead',
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
