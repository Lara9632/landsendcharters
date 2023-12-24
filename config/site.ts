export type SiteConfig = typeof siteConfig;


export const siteConfig = {
	name: "Lands End Charters",
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
					label: "Team",
					href: "/team",
				},
				{
					label: "Reviews",
					href: "/reviews",
				},
			],
		},
		{
			label: "Our Fleet",
			href: "/docs",
			subItems: [
				{
					label: "Yachts",
					href: "/yachts",
				},
				{
					label: "Fishing charters",
					href: "/fishing-charters",
				},
			],
		},
		{
			label: "Fishing Report",
			href: null,
			subItems: [
				{
					label: "What to expect",
					href: "/what-to-expect",
				},
			],
		},
		{
			label: "Cabo San Lucas Fishing chart",
			href: null,
			subItems: [
				{
					label: "Best Fishing Months Cabo",
					href: "/best-fishing-months-cabo",
				},
				{
					label: "Cabo San Lucas Fishing Tournament Schedule",
					href: "/cabo-san-lucas-fishing-tournament-schedule",
				},
			]
		},
		{
			label: "Contact Us",
			href: "/contact-us",
			subItems: [
				{
					label: "Our Location",
					href: "/our-location",
				},
				{
					label: "Check Boat Availability",
					href: "/check-boat-availability",
				},
			],
		},
		{
			label: "FAQ",
			href: "/contact-us",
			subItems: [
				{
					label: "Make a payment",
					href: "/make-a-payment",
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
					label: "Best Fishing Months Cabo",
					href: "/",
				},
				{
					label: "Cabo San Lucas Fishing Tournament Schedule",
					href: "/",
				},
			]
		},
		{
			label: "Contact Us",
			href: "/contact-us",
			subItems: [
				{
					label: "Our Location",
					href: "/our-location",
				},
				{
					label: "Check Boat Availability",
					href: "/check-boat-availability",
				},
			],
		},
		{
			label: "FAQ",
			href: "/contact-us",
			subItems: [
				{
					label: "Make a payment",
					href: "/make-a-payment",
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
		facebook: "https://facebook.com/",
	},
};
