import React from 'react';
import Link from 'next/link';
import { saira } from '@/config/fonts';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaIcons } from '@/components/SocialMediaIcons';

export function Footer() {
  return (
    <footer className={`${fontSans.className} antialiased text-base w-full  bg-[#041646] py-16 text-white px-2`}>
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-4">
        <div className="md:flex md:w-5/12 mb-10 md:mb-0 flex-col">
          <h2
            className={`${saira.className} tracking-wider antialiased uppercase text-2xl font-semibold mb-4 border-l-2 border-[#008dce] pl-4`}>
            Lands end charters
          </h2>
          <p className="px-2 text-base">
            <b>CABO SAN LUCAS IS OPEN!</b> Amigos – We are happy to be able to receive guests in Cabo for fishing and
            yacht charters as of June, 2020. With limited capacity and strict safety measures, Cabo is open and ready to
            give you an amazing vacation experience.{' '}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row grow mb-10 lg:mb-0 ">
          <div className="flex flex-col w-fit px-2 mb-4 lg:mb-0">
            <h2
              className={`${saira.className} tracking-wider antialiased uppercase text-2xl font-semibold mb-4 border-l-2 border-[#008dce] pl-4`}>
              Our Fleet
            </h2>
            <span className=" flex items-center">
              <FontAwesomeIcon icon={faChevronRight} className="font-black text-sm" />
              <Link href={siteConfig.links.fishingCharters} className="hover:text-[#4169e1] ml-2">
                Fishing Charters
              </Link>
            </span>
            <span className=" flex items-center">
              <FontAwesomeIcon icon={faChevronRight} className="font-black text-sm" />
              <Link href={siteConfig.links.yachts} className="hover:text-[#4169e1]  ml-2">
                Yacht Charters
              </Link>
            </span>
            <span className=" flex items-center">
              <FontAwesomeIcon icon={faChevronRight} className="font-black text-sm" />
              <Link href={siteConfig.links.checkBoatAvailability} className="hover:text-[#4169e1] ml-2">
                Check Boat Availability
              </Link>
            </span>
          </div>
          <div className="flex flex-col w-fit px-2">
            <h2
              className={`${saira.className} tracking-wider antialiased uppercase text-2xl font-semibold mb-4 border-l-2 border-[#008dce] pl-4`}>
              Help
            </h2>
            <span className=" flex items-center">
              <FontAwesomeIcon icon={faChevronRight} className="font-black text-sm" />
              <Link href={siteConfig.links.contactUs} className="hover:text-[#4169e1] ml-2">
                Contact Us
              </Link>
            </span>
            <span className=" flex items-center">
              <FontAwesomeIcon icon={faChevronRight} className="font-black text-sm" />
              <Link href={siteConfig.links.makeAPayment} className="hover:text-[#4169e1] ml-2">
                Make a Payment
              </Link>
            </span>
            <span className=" flex items-center">
              <FontAwesomeIcon icon={faChevronRight} className="font-black text-sm" />
              <Link href={siteConfig.links.faq} className="hover:text-[#4169e1] ml-2">
                FAQ
              </Link>
            </span>
          </div>
        </div>
        <div className="flex md:w-1/5 mb-10 md:mb-0 flex-col">
          <h2
            className={`${saira.className} tracking-wider antialiased uppercase text-2xl font-semibold mb-4 border-l-2 border-[#008dce] pl-4`}>
            Social Media
          </h2>
          <span className="flex gap-6 ml-2">
            <SocialMediaIcons className={`text-white text-3xl`} />
          </span>
        </div>
      </div>
    </footer>
  );
}
