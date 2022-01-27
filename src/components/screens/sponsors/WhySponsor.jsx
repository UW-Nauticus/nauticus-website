import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';
import MKButton from '../../common/MKButton';

function Information() {
  return (
    <MKBox component="section" pt={12}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12}>
            <MKTypography variant="h3" color="inherit">
              Why Sponsor Us?
            </MKTypography>
            <br />
            <MKTypography variant="body1" color="text">
              Angler Robotics is more than a student project. We strive to empower individuals while designing the most
              innovative and efficient ROV drone possible. Every contribution plays a key role in maintaining the
              success of our team and future drones. Our supporters are at the centre of what we do and we make it well
              known on campus and at competition events that they are an invaluable part of our team. Without the help
              from our supporters, achieving and fulfilling our dreams would not be possible.
            </MKTypography>
            <br />
            <MKTypography variant="body1" color="text">
              If you have any questions about sponsorship, or would like to sponsor us, email us at
              anglerrobotics@gmail.com
            </MKTypography>
          </Grid>
          <Grid
            item
            xs={12}
            mt={4}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <MKButton size="large" variant="contained" color="primary" circular>
              Sponsor Us
            </MKButton>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
