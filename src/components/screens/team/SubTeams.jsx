import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';

// Images
const mech = '/images/subteams/mech.png';
const electrical = '/images/subteams/electrical.jpg';
const software = '/images/subteams/software.png';
const business = '/images/subteams/business.jpg';

function SubTeams() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <MKTypography variant="h3">Subteams</MKTypography>
            <br />
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <MKTypography variant="h4" fontWeight="regular">
                  Mechanical
                </MKTypography>
                <br />
                <MKTypography variant="body2">
                  The Mechanical team is responsible for designing, manufacturing, and validating the frame of the ROV,
                  the enclosure for the electronics, and the ROV&apos;s primary tools. This includes waterproofing,
                  hydrodynamic simulations, and electrical integration.
                </MKTypography>
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
                <MKBox component="img" src={mech} alt="software" width="75%" />
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
                <MKBox component="img" src={electrical} alt="software" width="100%" />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKTypography variant="h4" fontWeight="regular">
                  Electrical
                </MKTypography>
                <br />
                <MKTypography variant="body2">
                  The Electrical team is in charge of all custom PCBs and off-the-shelf electronics in the ROV, as well
                  as the electronics on the surface-side control station. This includes designing and manufacturing
                  onboard sensors and implementing custom hardware to minimize voltage loss and signal integrity loss
                  from the surface to the ROV.
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6}>
                <MKTypography variant="h4" fontWeight="regular">
                  Software
                </MKTypography>
                <br />
                <MKTypography variant="body2">
                  The Software team creates the link between the electronics and our pilot. They&apos;re responsible the
                  GUI for the pilot to use and the communication software for directing commands from the surface-side
                  control station to the ROV underwater. They&apos;re also the team that creates the embedded software
                  for the main ROV systems and onboard sensors.
                </MKTypography>
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
                <MKBox component="img" src={software} alt="software" width="100%" />
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
                <MKBox component="img" src={business} alt="software" width="100%" />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKTypography variant="h4" fontWeight="regular">
                  Business
                </MKTypography>
                <br />
                <MKTypography variant="body2">
                  The Business team is responsible for fundraising, marketing, and keeping track of team finances. Our
                  team relies on sponsors to ensure that we have the resources and funding to show our full engineering
                  potential, and the Business team is integral to keeping great sponsor relations.
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SubTeams;
