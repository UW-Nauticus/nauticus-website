import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Kit 2 React components
import MKBox from '../components/common/MKBox';
import MKTypography from '../components/common/MKTypography';

// Material Kit 2 React examples
import CenteredFooter from '../components/layout/Footer';

// Images
const bgImage = '/images/bg-about-us.jpg';

const QAndAs = [
  {
    question: 'Do I need to have prior experience to join the team?',
    answer:
      'ABSOLUTELY NOT. UW Nauticus accepts all engineering students from any year. You just have to be committed to learning and helping out. Our team leads are always happy to help any member if they are stuck on a task. Our goal is to help you learn what you need so you can pass it down to future members.',
  },
  {
    question: 'Do I need to physically build the ROV?',
    answer:
      'Although most members are interested in building the ROV, we have so many roles in the team that you can have a completely hands-off position. Consider joining our operations sub-team or taking a focus on vehicle design.',
  },
  {
    question: 'Can I join later in the term?',
    answer:
      "Depending on your experience / what we're working on, we might ask you to wait until next the start of next term when we do orientation. But most terms we try to be accommodating so definitely reach out!",
  },
];

function FAQ() {
  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(rgba(gradients.dark.main, 0.6), rgba(gradients.dark.state, 0.6))}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: 'auto', textAlign: 'center' }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
            >
              Frequently Asked Questions
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          pb: 12,
          pt: 8,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid container alignItems="center" spacing={4}>
          {QAndAs.map((entry) => (
            <Grid key={entry.question} item xs={12}>
              <MKBox
                sx={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'grid',
                  placeItems: 'center',
                  left: '50%',
                  marginLeft: '5%',
                  marginRight: '5%',
                }}
              >
                <MKTypography variant="h3" fontWeight="regular" color="inherit" sx={{ mb: '5px' }}>
                  {entry.question}
                </MKTypography>

                <MKTypography variant="body2" color="text">
                  {entry.answer}
                </MKTypography>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter />
      </MKBox>
    </>
  );
}

export default FAQ;
