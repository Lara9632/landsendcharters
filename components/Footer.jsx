import React from 'react'

import { saira } from '@/config/fonts';
import { fontSans } from '@/config/fonts';

export function Footer() {
  return (
    <footer className={`${fontSans.className} antialiased text-base w-full  bg-[#041646] py-16 text-white`} >
      <div className='container mx-auto flex justify-between items-center gap-4'>
        <div className='flex flex-1 flex-col'>
          <h2 className={`${fontSans.className} antialiasedtext-2xl font-semibold`}>Lands end charters</h2>
          <p><b>CABO SAN LUCAS IS OPEN!</b>  Amigos – We are happy to be able to receive guests in Cabo for fishing and yacht charters as of June, 2020. With limited capacity and strict safety measures, Cabo is open and ready to give you an amazing vacation experience. </p>
        </div>
        <div className='flex flex-1 flex-col'>
          <h2 className='text-2xl font-semibold'>Lands end charters</h2>
          <p><b>CABO SAN LUCAS IS OPEN!</b>  Amigos – We are happy to be able to receive guests in Cabo for fishing and yacht charters as of June, 2020. . </p>
        </div>
        <div className='flex flex-1 flex-col'>
          <h2 className='text-2xl font-semibold'>Lands end charters</h2>
          <p><b>CABO SAN LUCAS IS OPEN!</b>  Amigos – We are happy to be able to receive guests in Cabo for fishing and yacht charters as of June, 2020. . </p>
        </div>
      </div>
    </footer>
  )
}
