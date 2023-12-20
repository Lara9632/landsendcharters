export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About Us",
			href: "/about",
			subItems: [
				{
					label: "Yachts",
					href: "/",
				},
				{
					label: "Fishing charters",
					href: "/",
				},
			],
		},
		{
			label: "Our Fleet",
			href: "/docs",
			subItems: [
				{
					label: "Yachts",
					href: "/",
				},
				{
					label: "Fishing charters",
					href: "/",
				},
			],
		},
		{
			label: "Fishing Report",
			href: null,
			subItems: [
				{
					label: "Yachts",
					href: "/",
				},
				{
					label: "Fishing charters",
					href: "/",
				},
			],
		},
		{
			label: "Cabo San Lucas Fishing chart",
			href: null,
			subItems: [
				{
					label: "Yachts",
					href: "/",
				},
				{
					label: "Fishing charters",
					href: "/",
				},
			],
		},
		{
			label: "Contact Us",
			href: "/contact-us",
		},
		{
			label: "FAQ",
			href: "/contact-us",
			subItems: [
				{
					label: "Yachts",
					href: "/",
				},
				{
					label: "Fishing charters",
					href: "/",
				},
			],
		},
		{
			label: "Blog",
			href: "/blog",
		},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About Us",
			href: "/about",
			subItems: [
				{
					label: "Yachts",
					href: "/",
				},
				{
					label: "Fishing charters",
					href: "/",
				},
			],
		},
		{
			label: "Our Fleet",
			href: "/docs",
			subItems: [
				{
					label: "Yachts",
					href: "/",
				},
				{
					label: "Fishing charters",
					href: "/",
				},
			],
		},
		{
			label: "Fishing Report",
			href: null,
			subItems: [
				{
					label: "Yachts",
					href: "/",
				},
				{
					label: "Fishing charters",
					href: "/",
				},
			],
		},
		{
			label: "Cabo San Lucas Fishing chart",
			href: null,
			subItems: [
				{
					label: "Yachts",
					href: "/",
				},
				{
					label: "Fishing charters",
					href: "/",
				},
			],
		},
		{
			label: "Contact Us",
			href: "/contact-us",
		},
		{
			label: "FAQ",
			href: "/contact-us",
			subItems: [
				{
					label: "Yachts",
					href: "/",
				},
				{
					label: "Fishing charters",
					href: "/",
				},
			],
		},
		{
			label: "Blog",
			href: "/blog",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
