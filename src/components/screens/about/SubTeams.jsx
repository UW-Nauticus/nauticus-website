import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';

// Images
const mech = '/images/subteams/mech.png';
const hardware = '/images/subteams/electrical.jpeg';
const software = '/images/subteams/software.jpeg';
const business = '/images/subteams/business.png';

function SubTeams() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <MKTypography variant="h3" color="inherit">
              Subteams
            </MKTypography>
            <br />
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <MKTypography variant="h4" fontWeight="regular" color="inherit">
                  Mechanical
                </MKTypography>
                <br />
                <MKTypography variant="body2" color="text">
                  Hey guys this is the mech team, we use our massive pipes to lay down all the foes and excel in all
                  areas of life where being good with our hands is a must. Gauranteed.
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
                <MKBox component="img" src={hardware} alt="software" width="100%" />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKTypography variant="h4" fontWeight="regular" color="inherit">
                  Hardware
                </MKTypography>
                <br />
                <MKTypography variant="body2" color="text">
                  Would you like to be a hard working hardware engineer. Look at Allen on the left. We found him when he
                  was only a child and were like father to him. Now he&apos;s putting in the last touches to the
                  hydrogen bomb, i mean rov, that we are developing to take over the world, i mean win the competition
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6}>
                <MKTypography variant="h4" fontWeight="regular" color="inherit">
                  Software
                </MKTypography>
                <br />
                <MKTypography variant="body2" color="text">
                  The software team at Angler Robotics writes embedded code to validate and support the hardware systems
                  in the car. Some projects include writing C-based firmware for the power distribution, battery
                  monitoring system and driver controls. We also have a telemetry system to monitor various aspects of
                  the car such as velocity and battery pack voltage.
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
                <MKTypography variant="h4" fontWeight="regular" color="inherit">
                  Business
                </MKTypography>
                <br />
                <MKTypography variant="body2" color="text">
                  Stocks only go up. We converted all the funds we raised from our sponsors to bitcoin and are holding
                  it on our balance sheet as a strategic short term investment. Thank El Salvador
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
