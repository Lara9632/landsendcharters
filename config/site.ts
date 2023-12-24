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
			label: "Our Fleet",
			href: "/",
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
	links: {
		twitter: "#",
		facebook: "https://www.facebook.com/landsendcharters/",
		youtube: "https://www.youtube.com/channel/UCjVvg5iFlZOA1S-78GqRQKg",
		instagram: "https://www.instagram.com/landsendcharters/",
		makeAPayment: "/make-a-payment",
		contactUs: "/contact-us",
		ourLocation: "/our-location",
		checkBoatAvailability: "/check-boat-availability",
		yachts: "/yachts",
		fishingCharters: "/fishing-charters",
		whatToExpect: "/what-to-expect",
		faq: "/faq",
	},
};
