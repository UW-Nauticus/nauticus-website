import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';

// Images
const mech = '/images/subteams/mech.png';
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
                <MKBox component="img" src={software} alt="software" width="100%" />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKTypography variant="h4" fontWeight="regular">
                  Controls
                </MKTypography>
                <br />
                <MKTypography variant="body2">
                  The Controls team combines electronics and software to provide function to the ROV and establish a
                  link between the pilot and the ROV. They&apos;re in charge of all custom PCBs and off-the-shelf
                  electronics in the ROV, as well as the electronics on the surface-side control station. They&apos;re
                  also responsible for all the software used by the ROV, from the GUI for that the pilot uses to the
                  embedded software for the main ROV systems and onboard sensors.
                </MKTypography>
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
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SubTeams;
