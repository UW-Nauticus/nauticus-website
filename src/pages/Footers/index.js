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

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Material Kit 2 React components
import MKBox from '../../components/MKBox';
import MKTypography from '../../components/MKTypography';

function CenteredFooter({ company, links, socials, light }) {
  const { href } = company;

  const renderLinks = links.map((link) => (
    <MKTypography
      key={link.name}
      component={Link}
      href={link.href}
      variant="body2"
      color={light ? 'white' : 'secondary'}
      fontWeight="regular"
    >
      {link.name}
    </MKTypography>
  ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.name}
      component={Link}
      href={social.link}
      variant="body2"
      color={light ? 'white' : 'secondary'}
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
          <MKTypography variant="body2" color={light ? 'white' : 'secondary'}>
            <MKTypography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? 'white' : 'secondary'}
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
  company: { href: '/', name: 'UW Nauticus' },
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
      icon: <FacebookIcon fontSize="small" />,
      link: 'https://www.facebook.com/',
      name: 'facebook',
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: '/',
      name: 'instagram',
    },
    {
      icon: <GitHubIcon fontSize="small" />,
      link: 'https://github.com/UW-Nauticus',
      name: 'github',
    },
    {
      icon: <YouTubeIcon fontSize="small" />,
      link: 'https://www.youtube.com/channel/UClLen4WNvXr1UgWIkF67nTw',
      name: 'youtube',
    },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
  socials: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

export default CenteredFooter;
