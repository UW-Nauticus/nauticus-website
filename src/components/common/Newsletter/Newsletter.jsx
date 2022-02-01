import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MKBox from '../MKBox';
import MKTypography from '../MKTypography';
import MKInput from '../MKInput';
import MKButton from '../MKButton';

function Newsletter() {
  return (
    <MKBox component="section" my={6}>
      <Container>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <MKTypography variant="h3">News & Updates</MKTypography>
            <MKTypography variant="body2" mb={3}>
              Add your email to our mailing list to learn about fun events and team milestones.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="primary" sx={{ height: '100%' }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
