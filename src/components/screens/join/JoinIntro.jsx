import React from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';

import MKTypography from '../../common/MKTypography';
import MKButton from '../../common/MKButton';

function JoinIntro() {
  return (
    <>
      <Grid item xs={12} md={12}>
        <MKTypography variant="h3">Join Angler Robotics Today</MKTypography>
        <br />
        <MKTypography variant="body1">
          Looking to become a part of a new and rapidly expanding team? Join Angler Robotics! It&apos;s our mission to
          ensure that every member of our team has a chance to contribute, regardless of skill level. Let&apos;s build
          and learn new things together!
        </MKTypography>
      </Grid>
      <Grid
        item
        xs={12}
        mt={8}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link href="/join/FAQ" passHref>
          <MKButton size="large" variant="contained" color="primary" circular>
            Frequently Asked Questions
          </MKButton>
        </Link>
      </Grid>
      <Grid item xs={12} md={12} mt={8}>
        <br />
        <MKTypography variant="body1">
          Ready to get started with Angler? Fill out the form below so we can get you set up with our Discord and other
          resources!
        </MKTypography>
      </Grid>
    </>
  );
}

export default JoinIntro;
