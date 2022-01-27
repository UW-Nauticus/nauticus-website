/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';
import NextLink from 'next/link';

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material Kit 2 React components
import MKBox from '../common/MKBox';
import MKTypography from '../common/MKTypography';

function CenteredFooter({ links, socials }) {
  const renderLinks = links.map((link) => (
    <NextLink key={link.name} href={link.href} passHref>
      <MKTypography component={Link} variant="body2" color="secondary" fontWeight="regular">
        {link.name}
      </MKTypography>
    </NextLink>
  ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.name}
      target="_blank" // opens in new tab
      component={Link}
      href={social.link}
      variant="body2"
      color="secondary"
      fontWeight="regular"
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={{ xs: 2, lg: 3, xl: 6 }} mb={3}>
            {renderLinks}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: 'center' }}>
          <MKTypography variant="body2" color="secondary">
            <MKTypography
              component={Link}
              href="mailto:contact@uwnauticus.com"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="secondary"
            >
              contact@uwnauticus.com
            </MKTypography>
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  links: [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About Us' },
    {
      href: '/sponsors',
      name: 'Sponsors',
    },
    { href: '/faq', name: 'FAQ' },
    { href: '/contact', name: 'Contact Us' },
  ],
  socials: [
    {
      icon: <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />,
      link: 'https://www.facebook.com/',
      name: 'facebook',
    },
    {
      icon: <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />,
      link: '/',
      name: 'instagram',
    },
    {
      icon: <FontAwesomeIcon icon={['fab', 'github']} size="lg" />,
      link: 'https://github.com/UW-Nauticus',
      name: 'github',
    },
    {
      icon: <FontAwesomeIcon icon={['fab', 'youtube']} size="lg" />,
      link: 'https://www.youtube.com/channel/UClLen4WNvXr1UgWIkF67nTw',
      name: 'youtube',
    },
  ],
};

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  socials: PropTypes.arrayOf(PropTypes.object),
};

export default CenteredFooter;
