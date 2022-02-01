import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

import MKBox from '../common/MKBox';
import MKTypography from '../common/MKTypography';
import typography from '../../assets/theme/base/typography';
import routes from '../../utils/routes/routes';
import IconLink from '../common/icons/IconLink';

function Base(props) {
  // eslint-disable-next-line react/prop-types
  const { Child } = props;
  return (
    <MKBox component="header" position="relative">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <NextLink href="/" passHref>
              <MKTypography
                component={Link}
                variant="button"
                color="white"
                fontWeight="regular"
                fontSize={typography.size.lg}
                py={1}
                mr={2}
                sx={{
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    cursor: 'pointer',
                    color: ({ palette: { primary } }) => `${primary.main}`,
                  },
                }}
              >
                ANGLER ROBOTICS
              </MKTypography>
            </NextLink>
            <MKBox
              component="ul"
              display={{ xs: 'none', lg: 'flex' }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: 'none' }}
            >
              {routes.links.map((route) => (
                <MKBox key={route.name} component="li">
                  <NextLink href={route.href} passHref>
                    <MKTypography
                      component={Link}
                      variant="button"
                      color="white"
                      fontWeight="regular"
                      fontSize={typography.size.md}
                      p={1}
                      sx={{
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          cursor: 'pointer',
                          color: ({ palette: { primary } }) => `${primary.main}`,
                        },
                      }}
                    >
                      {route.name}
                    </MKTypography>
                  </NextLink>
                </MKBox>
              ))}
            </MKBox>
            <MKBox component="ul" display={{ xs: 'none', lg: 'flex' }} pl={4} m={0} sx={{ listStyle: 'none' }}>
              <Grid container spacing={1}>
                {routes.socials.map((social) => (
                  <Grid key={social.name} item>
                    <IconLink name={social.name} href={social.href} size="2x" />
                  </Grid>
                ))}
              </Grid>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Child />
    </MKBox>
  );
}

export default Base;
