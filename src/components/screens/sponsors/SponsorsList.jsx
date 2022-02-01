import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';
import sponsorStructure from '../../../utils/sponsorStructure';

function Sponsors() {
  const sponsors = sponsorStructure.map((sponsor) => (
    <Grid
      key={sponsor.name}
      item
      xs={12}
      md={4}
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <MKBox component="img" src={sponsor.logo} alt={sponsor.name} width="100%" />
    </Grid>
  ));

  return (
    <MKBox component="section" pt={12}>
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
        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid container alignItems="center" justifyContent="center" spacing={6}>
            {sponsors}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Sponsors;
