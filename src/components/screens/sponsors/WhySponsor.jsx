import React from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';
import MKButton from '../../common/MKButton';

function Information() {
  return (
    <MKBox component="section" pt={12}>
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} md={12}>
            <MKTypography variant="h3">Why Sponsor Us?</MKTypography>
            <br />
            <MKTypography variant="body1">
              Angler Robotics is more than a student project. We strive to empower individuals while designing the most
              innovative and efficient ROV drone. Every contribution plays a key role in maintaining the success of our
              team and future ROVs. Our supporters are at the centre of what we do and we make it well known on campus
              and at competition events that they are an invaluable part of our team. Without the help from our
              supporters, achieving and fulfilling our dreams would not be possible.
            </MKTypography>
            <br />
            <MKTypography variant="body1">
              If you have any questions about sponsorship, or would like to sponsor us, press the button below to
              contact us.
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
            <Link href="mailto:sponsor@angler-robotics.com" passHref>
              <MKButton size="large" variant="contained" color="primary" circular>
                Sponsor Us
              </MKButton>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
