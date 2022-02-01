import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import MKBox from '../common/MKBox';
import MKTypography from '../common/MKTypography';
import routes from '../../utils/routes/routes';
import IconLink from '../common/icons/IconLink';

function CenteredFooter({ links, socials }) {
  const renderLinks = links.map((link) => (
    <NextLink key={link.name} href={link.href} passHref>
      <MKTypography
        component={Link}
        variant="body2"
        color="white"
        fontWeight="regular"
        sx={{
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            cursor: 'pointer',
            color: ({ palette: { primary } }) => `${primary.main}`,
          },
        }}
      >
        {link.name}
      </MKTypography>
    </NextLink>
  ));

  const renderSocials = socials.map((social) => <IconLink key={social.name} name={social.name} href={social.href} />);

  return (
    <MKBox sx={{ borderTop: '1px solid #333;' }} component="footer" py={6}>
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
          <MKTypography variant="body2" color="text">
            <MKTypography
              component={Link}
              href="mailto:contact@angler-robotics.com"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              opacity={0.8}
              sx={{
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  cursor: 'pointer',
                  color: ({ palette: { primary } }) => `${primary.main}`,
                },
              }}
            >
              contact@angler-robotics.com
            </MKTypography>
          </MKTypography>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: 'center', marginTop: 3, marginBottom: -5 }}>
          <NextLink href="https://vercel.com?utm_source=angler-robotics&utm_campaign=oss" passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a target="_blank">
              <Image src="/powered-by-vercel.svg" alt="Powered by Vercel" width={212} height={44} />
            </a>
          </NextLink>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
const footerRoutes = {
  socials: [
    ...routes.socials,
    {
      href: 'https://github.com/angler-robotics',
      name: 'github',
    },
  ],
  links: [...routes.links],
};
CenteredFooter.defaultProps = footerRoutes;

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  socials: PropTypes.arrayOf(PropTypes.object),
};

export default CenteredFooter;
