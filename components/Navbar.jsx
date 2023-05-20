"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Drawer from '@/components/Drawer'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="w-full px-4 max-w-7xl mx-auto py-2 flex items-center justify-between overflow-hidden">
        <Link
          className="cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
        >
          {/* <Logo className="w-12 h-16"/> */}
          <Image
            src="/img/logo-new.svg"
            alt='Logo'
            className="w-12 h-16"
            width={48}
            height={64}
          />
        </Link>
        <aside className="hidden lg:flex items-center space-x-12">
          <ul className="flex items-center space-x-8">
            <li>
              <article className="flex items-center">
                <a className="btn gap-2 btn-success hover:btn-primary rounded-full" href="https://wa.me/19174001006">
                  <img src="/img/whatsapp.png"/>
                  1 (917) 400-1006
                </a>
              </article>
            </li>
            <li>
              <Link
                offset={-85}
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass='font-semibold text-primary'
                className="cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                offset={-165}
                to="vision"
                smooth={true}
                duration={500}
                spy={true}
                activeClass='font-semibold text-primary'
                className="cursor-pointer"
              >
                Our Vision
              </Link>
            </li>
            <li>
              <Link
                offset={-85}
                to="pricing"
                smooth={true}
                duration={500}
                activeClass='font-semibold text-primary'
                className="cursor-pointer"
                spy={true}
                >
                  Pricing
              </Link>
            </li>
          </ul>
          <Link
            offset={-115}
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            >
            <button 
              className="rounded font-semibold px-6 py-2 bg-primary text-light hover:opacity-80 transition-opacity ease-in-out duration-300">
              Get a Dispatcher
            </button>
          </Link>
        </aside>
      </div>
      <Image 
        onClick={() => setShowDrawer(!showDrawer)} 
        className='md:hidden absolute top-6 right-4' 
        src="/img/hamburger.svg" 
        alt="Hamburger" 
        width={32}
        height={48}
      />
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </nav>
  )
}

export default Navbar