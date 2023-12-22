'use client'
import React from "react";
import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'
import {
	Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem,
} from "@nextui-org/navbar";
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./jsx-icons";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, SearchIcon, } from "@/components/icons";
import Image from "next/image";
import { saira } from "@/config/fonts";


export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const [dropdownStates, setDropdownStates] = useState<Record<string, boolean>>({});

  const handleMouseEnter = (itemId: string) => {
    setDropdownStates(prev => ({ ...prev, [itemId]: true }));
  };

  const handleMouseLeave = (itemId: string) => {
    setDropdownStates(prev => ({ ...prev, [itemId]: false }));
  };
	const icons = {
		chevron: <ChevronDown fill="currentColor" size={16} height={undefined} width={undefined} />,
		scale: <Scale className="text-warning" fill="currentColor" size={30} height={undefined} width={undefined} />,
		lock: <Lock className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
		activity: <Activity className="text-secondary" fill="currentColor" size={30} height={undefined} width={undefined} />,
		flash: <Flash className="text-primary" fill="currentColor" size={30} height={undefined} width={undefined} />,
		server: <Server className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
		user: <TagUser className="text-danger" fill="currentColor" size={30} height={undefined} width={undefined} />,
	};

	return (
		<NextUINavbar position="sticky" height={'auto'} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className={`${saira.className} antialiased text-2xl font-semibold container mx-auto`} style={{color: "#111D56"}} 
		classNames={
			{
				wrapper: `justify-normal px-2`,
				content: "justify-between",
				item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
        toggleIcon: "w-6 h-6 text-black-500 absolute"

			}
		}>
			<NavbarContent justify="start" style={{ maxWidth: 'fit-content' }}>
				<NavbarBrand as="li" className="gap-3 py-3 pl-3">
					<NextLink className="flex justify-start items-center" href="/">
						<Image src='/Logo-lands-end-charters.webp' width={105} height={123} alt='logo' className="w-20 md:w-[105px]" />
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<div className="hidden lg:flex flex-col gap-3 w-4/5">
				<NavbarContent className="hidden sm:flex ml-2" style={{ justifyContent: 'space-between', gap: '2rem' }}>

					<NavbarItem className="gap-2 items-center text-lg">
						<NextLink className="flex items-center gap-2" href="tel:8002815778">
							LANDS END CHARTERS 1-800-281-5778
						</NextLink>
					</NavbarItem>
					<NavbarItem className="gap-2 items-center">
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
						{/* <ThemeSwitch /> */}
					</NavbarItem>
				</NavbarContent>
				<NavbarContent
					className="hidden sm:flex basis-4/5"
					justify="start"
				>
					<ul className="hidden lg:flex gap-3 justify-between ml-2 items-center">
						{siteConfig.navItems.map((item) => (
							(item?.subItems) ?
								<Dropdown key={item.href} isOpen={dropdownStates[item.label]}>
									<NavbarItem>
										<DropdownTrigger >
											<Button
												className={`p-0 bg-transparent data-[hover=true]:bg-transparent uppercase text-2xl font-semibold ${saira.className} antialiased gap-0 min-w-0`}
												endContent={icons.chevron}
												style={{color: "#111D56", fontSize : '22.5px'}}
												radius="sm"
												variant="light"
												onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={() => handleMouseLeave(item.label)}
											>
												{item.label}
											</Button>
										</DropdownTrigger>
									</NavbarItem>
									<DropdownMenu
										className="w-[200px]"
										itemClasses={{
											base: "gap-4",
										}}
                    aria-label="Dynamic Actions" items={siteConfig.navItems}
									>
										{item.subItems.map((subItem) => (
											<DropdownItem
												key={subItem.label}
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

			<NavbarContent className="flex lg:hidden pl-4" justify="end">
				{/* <ThemeSwitch /> */}
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} icon={<Bars3Icon/>} />
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
