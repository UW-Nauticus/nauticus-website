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

// Images
const engSoc = '/images/sponsors/engsoc.png';
const uwEng = '/images/sponsors/uweng.jpeg';
const weef = '/images/sponsors/weef.jpeg';

function Sponsors() {
  return (
    <MKBox component="section" pt={3}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <MKBox p={2} lineHeight={1}>
              <MKTypography variant="h3" mt={2} mb={8}>
                Our Sponsors
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid container alignItems="center" spacing={6}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <MKBox component="img" src={uwEng} alt="software" width="75%" />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <MKBox component="img" src={engSoc} alt="software" width="60%" />
            </Grid>

            <Grid
              item
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <MKBox component="img" src={weef} alt="software" width="50%" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Sponsors;
