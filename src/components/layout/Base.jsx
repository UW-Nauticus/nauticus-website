import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material Kit 2 React components
import MKBox from '../common/MKBox';
import MKButton from '../common/MKButton';
import MKTypography from '../common/MKTypography';

// Images

function Base(props) {
  // eslint-disable-next-line react/prop-types
  const { Child } = props;
  return (
    <MKBox component="header" position="relative">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <NextLink href="/" passHref>
              <MKTypography component={Link} variant="button" color="white" fontWeight="regular" py={0.8125} mr={2}>
                TEAM LOGO HERE
              </MKTypography>
            </NextLink>
            <MKButton
              variant="outlined"
              color="white"
              sx={{
                display: { xs: 'block', lg: 'none' },
                ml: 'auto',
              }}
            >
              <MKBox component={FontAwesomeIcon} color="white" icon={['fas', 'bars']} />
            </MKButton>
            <MKBox
              component="ul"
              display={{ xs: 'none', lg: 'flex' }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: 'none' }}
            >
              <MKBox component="li">
                <NextLink href="/about" passHref>
                  <MKTypography component={Link} variant="button" color="white" fontWeight="regular" p={1}>
                    About
                  </MKTypography>
                </NextLink>
              </MKBox>
              <MKBox component="li">
                <NextLink href="/join" passHref>
                  <MKTypography component={Link} variant="button" color="white" fontWeight="regular" p={1}>
                    Sign Up
                  </MKTypography>
                </NextLink>
              </MKBox>
              <MKBox component="li">
                <NextLink href="/sponsors" passHref>
                  <MKTypography component={Link} variant="button" color="white" fontWeight="regular" p={1}>
                    Sponsors
                  </MKTypography>
                </NextLink>
              </MKBox>
              <MKBox component="li">
                <NextLink href="/faq" passHref>
                  <MKTypography component={Link} variant="button" color="white" fontWeight="regular" p={1}>
                    FAQ
                  </MKTypography>
                </NextLink>
              </MKBox>
              <MKBox component="li">
                <NextLink href="/contact" passHref>
                  <MKTypography component={Link} variant="button" color="white" fontWeight="regular" p={1}>
                    Contact
                  </MKTypography>
                </NextLink>
              </MKBox>
            </MKBox>
            <MKBox component="ul" display={{ xs: 'none', lg: 'flex' }} p={0} m={0} sx={{ listStyle: 'none' }}>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  target="_blank" // opens in new tab
                  href="https://github.com/angler-robotics"
                  variant="button"
                  p={1}
                >
                  <MKBox component={FontAwesomeIcon} color="white" icon={['fab', 'github']} size="lg" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                {/* TODO add instagram link */}
                <MKTypography
                  component={Link}
                  target="_blank" // opens in new tab
                  href="#"
                  variant="button"
                  p={1}
                >
                  <MKBox component={FontAwesomeIcon} color="white" icon={['fab', 'instagram']} size="lg" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  target="_blank" // opens in new tab
                  href="https://www.youtube.com/channel/UClLen4WNvXr1UgWIkF67nTw"
                  variant="button"
                  p={1}
                >
                  <MKBox component={FontAwesomeIcon} color="white" icon={['fab', 'youtube']} size="lg" />
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Child />
    </MKBox>
  );
}

export default Base;
