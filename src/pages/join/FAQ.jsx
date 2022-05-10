import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import Link from 'next/link';
import MKBox from '../../components/common/MKBox';
import MKTypography from '../../components/common/MKTypography';
import TextLink from '../../components/common/TextLink';
import MKButton from '../../components/common/MKButton';

// Images
const bgImage = '/images/background/allen-zhang-totally-working.jpg';

const QAndAs = [
  {
    question: 'Do I need to have prior experience to join the team?',
    answer: (
      <p>
        Absolutely not! Angler Robotics accepts students from any year. All you need is enthusiasm and a willingness to
        learn.{' '}
      </p>
    ),
  },
  {
    question: 'Can I join as a student outside the Faculty?',
    answer: (
      <p>
        Yes, we pride ourselves on our members&apos; diverse skillsets. We have a spot for you, no matter your
        educational background or experience.
      </p>
    ),
  },
  {
    question: 'Which subteam should I join?',
    answer: (
      <p>
        This decision can be quite daunting at first, but we will try to help you with your decision. Take a look at our{' '}
        <TextLink href="/team" text="team page" /> to learn a bit more about what each team does. Don&apos;t worry, if
        you change your mind you can always join another subteam.
      </p>
    ),
  },
  {
    question: 'Do I need to participate in the competition if I join?',
    answer: (
      <p>
        No, participation in the competition is only mandatory for the team leads. Everyone is free to attend if they
        want to though!
      </p>
    ),
  },
  {
    question: 'Can I join later in the term?',
    answer: (
      <p>
        We can almost always accommodate, so definitely <TextLink href="/contact" text="reach out! " />
        However, depending on what we are working on, we may ask you to wait the start of next term when we do
        orientation.
      </p>
    ),
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
            `${linearGradient(rgba(gradients.primary.main, 0.4), rgba(gradients.primary.state, 0.8))}, url(${bgImage})`,
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
          mb: 8,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox component="section" pt={12} pb={12}>
          <Container>
            <Grid container alignItems="center" spacing={8}>
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
                    <MKTypography variant="h3" fontWeight="regular">
                      {entry.question}
                    </MKTypography>
                    <MKTypography variant="body1">{entry.answer}</MKTypography>
                  </MKBox>
                </Grid>
              ))}
              <Grid item xs={12}>
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
                  <MKTypography variant="h2">Any more questions?</MKTypography>
                </MKBox>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Link href="/contact" passHref>
                  <MKButton size="large" variant="contained" color="primary" circular>
                    Contact Us
                  </MKButton>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
    </>
  );
}

export default FAQ;
