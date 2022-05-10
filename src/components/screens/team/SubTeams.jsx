import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MKBox from '../../common/MKBox';
import MKTypography from '../../common/MKTypography';

function SubTeams() {
  const subTeamList = [
    {
      name: 'Mechanical',
      description:
        'The Mechanical team is responsible for designing, manufacturing, and validating the frame of the AUV, ' +
        "the enclosure for the electronics, and the AUV's primary tools. This includes waterproofing, " +
        'hydrodynamic simulations, and electrical integration.',
      image: '/images/subteams/mech.png',
    },
    {
      name: 'Controls',
      description:
        'The Controls team combines electronics and software to provide function to the AUV. ' +
        "They're in charge of all custom PCBs and off-the-shelf electronics in the AUV. " +
        "They're also responsible for all the software used by the AUV, " +
        'from the onboard computer vision software to the embedded software for the main AUV systems and onboard sensors.',
      image: '/images/subteams/controls.png',
    },
    {
      name: 'Business',
      description:
        'The Business team is responsible for fundraising, marketing, and keeping track of team finances. ' +
        'Our team relies on sponsors to ensure that we have the resources and funding to show our full engineering potential, ' +
        'and the Business team is integral to keeping great sponsor relations.',
      image: '/images/subteams/business.jpg',
    },
  ];

  const subTeams = subTeamList.map((team) => {
    const description = (
      <Grid item xs={12} md={6}>
        <MKTypography variant="h4" fontWeight="regular">
          {team.name}
        </MKTypography>
        <br />
        <MKTypography variant="body2">{team.description}</MKTypography>
      </Grid>
    );
    const teamImage = (
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <MKBox component="img" src={team.image} alt={team.name} width="100%" />
      </Grid>
    );

    return (
      <>
        {description} {teamImage}
      </>
    );
  });

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <MKTypography variant="h3">Subteams</MKTypography>
            <br />
            <Grid container alignItems="center" spacing={6}>
              {subTeams}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SubTeams;
