import React from 'react';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Material Kit 2 React components
import MKTypography from '../components/common/MKTypography';

const footerRoutes = {
  brand: {
    name: 'UW Nauticus',
    image: 'logo',
    route: '/',
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: 'https://www.facebook.com/',
    },
    {
      icon: <InstagramIcon />,
      link: '',
    },
    {
      icon: <GitHubIcon />,
      link: 'https://github.com/UW-Nauticus',
    },
    {
      icon: <YouTubeIcon />,
      link: 'https://www.youtube.com/channel/UClLen4WNvXr1UgWIkF67nTw',
    },
  ],
  menus: [
    {
      name: 'Explore',
      items: [
        {
          name: 'About',
          href: '/about',
        },
        {
          name: 'Sign Up',
          href: '/join',
        },
        {
          name: 'Sponsors',
          href: '/sponsors',
        },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ],
  contact: (
    <MKTypography variant="button" fontWeight="regular">
      <MKTypography component="a" href="" target="_blank" variant="button" fontWeight="regular">
        Email or something
      </MKTypography>
    </MKTypography>
  ),
};

export default footerRoutes;
