interface Sponsor {
  name: string;
  logo: string;
  href: string;
}

export default [
  {
    name: 'University of Waterloo Faculty of Engineering',
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
] as Array<Sponsor>;
