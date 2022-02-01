interface Sponsor {
  name: string;
  logo: string;
}

export default [
  { name: 'University of Waterloo Faculty of Engineering', logo: '/images/sponsors/waterloo-engineering.png' },
  { name: 'Waterloo Engineering Endowment Foundation', logo: '/images/sponsors/weef.png' },
  { name: 'Waterloo Engineering Society', logo: '/images/sponsors/engsoc.png' },
] as Array<Sponsor>;
