// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

export default {
	brand: {
		name: "UW Nauticus",
		image: "logo",
		route: "/",
	},
	socials: [
		{
			icon: <FacebookIcon />,
			link: "https://www.facebook.com/CreativeTim/",
		},
		{
			icon: <TwitterIcon />,
			link: "https://twitter.com/creativetim",
		},
		{
			icon: <GitHubIcon />,
			link: "https://github.com/creativetimofficial",
		},
		{
			icon: <YouTubeIcon />,
			link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
		},
	],
	menus: [
		{
			name: "Explore",
			items: [
				{
					name: "About",
					href: "/about",
				},
				{
					name: "Sign Up",
					href: "/join",
				},
				{
					name: "Sponsors",
					href: "/sponsors",
				},
				{ name: "FAQ", href: "/faq" },
				{ name: "Contact", href: "/contact" },
			],
		},
	],
	contact: (
		<MKTypography variant="button" fontWeight="regular">
			<MKTypography
				component="a"
				href=""
				target="_blank"
				variant="button"
				fontWeight="regular"
			>
				Email or something
			</MKTypography>
		</MKTypography>
	),
};
