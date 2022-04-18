import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import MKTypography from '../../common/MKTypography';
import MKBox from '../../common/MKBox';
import TextLink from '../../common/TextLink';

function Mission() {
  const competitionLink = (
    <TextLink href="https://robonation.org/programs/robosub/" text="RoboNation RoboSub Competition" />
  );

  return (
    <MKBox component="section" pt={12}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12}>
            <MKTypography variant="h3">Our Mission</MKTypography>
            <br />
            <MKTypography variant="body1">
              Our mission is to design and build an autonomous underwater vehicle (AUV) by the end of Q1 2023 to compete
              in the {competitionLink}.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Mission;
