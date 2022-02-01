import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function GoogleForm(): JSX.Element {
  return (
    <Box component="section" pb={12} pt={12}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <iframe
              title="sign-up-form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSc07sHwWT-8HWekjXQpQVzv1oiPpWy5PmbBicsawpVx4SPBQw/viewform?embedded=true"
              frameBorder="4"
              marginHeight={0}
              marginWidth={0}
              height="1000em"
              width="100%"
            >
              Loading…
            </iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default GoogleForm;
