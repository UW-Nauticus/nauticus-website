interface Sponsor {
  name: string;
  logo: string;
  href: string;
}

export default [
  {
    name: 'Waterloo Faculty of Engineering',
    logo: '/images/sponsors/waterloo-engineering.png',
    href: 'https://uwaterloo.ca/engineering/',
  },
  {
    name: 'Waterloo Engineering Endowment Foundation',
    logo: '/images/sponsors/weef.png',
    href: 'https://uwaterloo.ca/engineering-endowment-foundation/',
  },
  {
    name: 'Waterloo Engineering Society',
    logo: '/images/sponsors/engsoc.png',
    href: 'https://www.engsoc.uwaterloo.ca/',
  },
  {
    name: 'Vercel',
    logo: '/images/sponsors/vercel.svg',
    href: 'https://vercel.com?utm_source=angler-robotics&utm_campaign=oss',
  },
  {
    name: 'Altium',
    logo: '/images/sponsors/altium.svg',
    href: 'https://www.altium.com/',
  },
] as Array<Sponsor>;
