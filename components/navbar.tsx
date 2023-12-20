'use client'
import React from "react";
import {
	Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem,
} from "@nextui-org/navbar";
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./jsx-icons";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { dropdownMenu, link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, SearchIcon, } from "@/components/icons";
import { Logo } from "@/components/icons";
import Image from "next/image";
import { saira } from "@/config/fonts";

export const Navbar = () => {
	// const searchInput = (
	// 	<Input
	// 		aria-label="Search"
	// 		classNames={{
	// 			inputWrapper: "bg-default-100",
	// 			input: ",
	// 		}}
	// 		endContent={
	// 			<Kbd className="hidden lg:inline-block" keys={["command"]}>
	// 				K
	// 			</Kbd>
	// 		}
	// 		labelPlacement="outside"
	// 		placeholder="Search..."
	// 		startContent={
	// 			<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
	// 		}
	// 		type="search"
	// 	/>
	// );
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const icons = {
		chevron: <ChevronDown fill="currentColor" size={16} height={undefined} width={undefined} />,
		scale: <Scale className="text-warning" fill="currentColor" size={30} height={undefined} width={undefined} />,
		lock: <Lock className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
		activity: <Activity className="text-secondary" fill="currentColor" size={30} height={undefined} width={undefined} />,
		flash: <Flash className="text-primary" fill="currentColor" size={30} height={undefined} width={undefined} />,
		server: <Server className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
		user: <TagUser className="text-danger" fill="currentColor" size={30} height={undefined} width={undefined} />,
	};

	// const menuItems = [
	// 	"Profile",
	// 	"Dashboard",
	// 	"Activity",
	// 	"Analytics",
	// 	"System",
	// 	"Deployments",
	// 	"My Settings",
	// 	"Team Settings",
	// 	"Help & Feedback",
	// 	"Log Out",
	// ];

	return (
		<NextUINavbar maxWidth="xl" position="sticky" height={'auto'} onMenuOpenChange={setIsMenuOpen} className={`${saira.className} antialiased text-2xl font-semibold`} style={{color: "#111D56"}} classNames={
			{
				wrapper: `justify-normal px-2`,
				content: "justify-between",
				item: "item-classes",

			}
		}>
			<NavbarContent justify="start" style={{ maxWidth: 'fit-content' }}>
				<NavbarBrand as="li" className="gap-3 p-3">
					<NextLink className="flex justify-start items-center" href="/">
						<Image src='/Logo-lands-end-charters.webp' width={105} height={123} alt='logo' className="w-20 md:w-28" />
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<div className="flex flex-col basis-4/5 gap-3">
				<NavbarContent className="hidden sm:flex ml-2" style={{ justifyContent: 'space-between', gap: '2rem' }}>

					<NavbarItem className="hidden md:flex gap-2 items-center text-lg">
						<NextLink className="flex items-center gap-2" href="tel:8002815778">
							LANDS END CHARTERS 1-800-281-5778
						</NextLink>
					</NavbarItem>
					<NavbarItem className="hidden md:flex gap-2 items-center">
						{/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
							<FacebookIcon className="text-default-500" />
						</Link> */}
						<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
							<TwitterIcon className="text-default-500" />
						</Link>
						{/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
							<YouTubeIcon className="text-default-500" />
						</Link> */}
						{/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
							<InstagramIcon className="text-default-500" />
						</Link> */}
						<ThemeSwitch />
					</NavbarItem>
				</NavbarContent>
				<NavbarContent
					className="hidden sm:flex basis-1/5 "
					justify="start"
				>
					<ul className="hidden md:flex gap-4 justify-between ml-2 items-center">
						{siteConfig.navItems.map((item) => (
							(item?.subItems) ?
								<Dropdown key={item.href}>
									<NavbarItem>
										<DropdownTrigger>
											<Button
												disableRipple
												className={`p-0 bg-transparent data-[hover=true]:bg-transparent uppercase text-2xl font-semibold ${saira.className} antialiased `}
												endContent={icons.chevron}
												style={{color: "#111D56"}}
												radius="sm"
												variant="light"
											>
												{item.label}
											</Button>
										</DropdownTrigger>
									</NavbarItem>
									<DropdownMenu
										className="w-[340px]"
										itemClasses={{
											base: "gap-4",
										}}
									>
										{item.subItems.map((subItem) => (
											<DropdownItem
												key={subItem.label}
												description="ACME scales apps to meet user demand, automagically, based on load. "
												startContent={icons.scale}
										style={{ fontSize : '22.5px' }}
											>
												{subItem.label}
											</DropdownItem>
										))}
									</DropdownMenu>
								</Dropdown>
								:
								<NavbarItem key={item.href}>
									<NextLink
										className="data-[active=true]:text-primary data-[active=true]:font-semibold font-semibold uppercase text-xl"
										style={{ fontSize : '22.5px' }}
										
										color="foreground"
										href={item.href}
									>
										{item.label}
									</NextLink>
								</NavbarItem>
						))}
					</ul>
					{/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
				</NavbarContent>
			</div>

			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden" />
			</NavbarContent>

			<NavbarMenu>
				{/* {searchInput} */}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
