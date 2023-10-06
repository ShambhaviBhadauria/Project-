'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../Images/favicon.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react"

const banner = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  } 


  return (
    <nav className='fixed w-full h-24 shadow-xl bg-white mb-20'>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
          <div onClick={handleNav} className='cursor-pointer pr-22 pl-5'>  
            <AiOutlineMenu size={25} />
          </div>

          <div>
            <h1 className='text-2xl font-serif'>SPEED: Software Practice Emperical Evidence Database</h1>
          </div>

          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                width="75"
                height="75"
                className='cursor-pointer'
                priority/>
            </Link>
          </div>
        </div>


        <div className={
          menuOpen
          ? "fixed left-0 top-25 w-[20%] h-screen bg-red-50 p-10 ease-in duration-400"
          : "fixed left-[-100%] top-25 h-screen p-10 ease-in duration-500"
        }>

        <div className='flex-col py-4 z-0'>
          <ul>

            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer border-y-2 border-gray-500 pl-8 rounded-md bg-red-50 hover:bg-red-200'
              >
                Search Articles
              </li>
            </Link>
            <br/>
            <Link href="/submission">
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer border-y-2 border-gray-500 pl-8 rounded-md bg-red-50 hover:bg-red-200'
              >
                Submit Article
              </li>
            </Link>
            <br/>
            <Link href="/moderation">
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer border-y-2 border-gray-500 pl-8 rounded-md bg-red-50 hover:bg-red-200'
              >
                Moderation
              </li>
            </Link>
            <br/>
            <Link href="/analysis">
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer border-y-2 border-gray-500 pl-8 rounded-md bg-red-50 hover:bg-red-200'
              >
                Analysis
              </li>
            </Link>


          </ul>
        </div>

        </div>
    </nav>
  )
}

export default banner