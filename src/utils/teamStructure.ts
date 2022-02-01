interface SocialInfo {
  name: 'github' | 'linkedin';
  href: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: Array<SocialInfo>;
}

interface Team {
  name: string;
  description: string;
  members: Array<TeamMember>;
}

const github = (username: string): SocialInfo => ({
  name: 'github',
  href: `https://github.com/${username}`,
});

const linkedin = (username: string): SocialInfo => ({
  name: 'linkedin',
  href: `https://www.linkedin.com/in/${username}`,
});

export default [
  {
    name: 'Team Leads',
    description: `The Team Leads direct the team's operations and facilitate communication and integration between subteams.`,
    members: [
      {
        name: 'Cameron Kinsella',
        role: 'CEO, Operations Lead',
        image: '/images/team/cameron-kinsella.jpg',
        socials: [linkedin('cameronkinsella'), github('cameronkinsella')],
      },
      {
        name: 'Adrian Jendo',
        role: 'CFO, Administration Lead',
        image: '/images/team/adrian-jendo.jpg',
        socials: [linkedin('adrian-jendo'), github('AdrianJendo')],
      },
      {
        name: 'Adam Barroso',
        role: 'Software and Electrical Lead',
        image: '/images/team/adam-barroso.jpg',
        socials: [linkedin('adam-barroso-804357172'), github('ABarroso647')],
      },
      {
        name: 'Allen Zhang',
        role: 'Mechanical Lead',
        image: '/images/team/allen-zhang.png',
        socials: [linkedin('allen-zhang-5764b8189')],
      },
    ],
  },
] as Array<Team>;
