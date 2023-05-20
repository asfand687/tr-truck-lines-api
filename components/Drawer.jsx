"use client"

import { Link } from "react-scroll"

const Drawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <nav className={` md:hidden fixed z-50 top-20 bg-white p-6 flex flex-col items-center rounded-lg shadow-xl space-y-4 transition-all all ease-out duration-300 ${showDrawer ? 'right-0' : '-right-full'}`}>
      <div 
        onClick={() => setShowDrawer(false)} 
        className="w-full flex flex-row-reverse"
      >
        <img 
          src="/img/close.svg" 
          alt="Close" 
        />
      </div>
      <Link
          className="cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
          offset={-50}
        >
        <img 
          className="w-16" 
          src="/img/logo-new.svg" 
          alt="Logo" 
        />
      </Link>
      <ul className="list-none flex flex-col gap-y-2">
        <li>
          <article className="flex items-center">
            <a className="btn gap-2 btn-success hover:btn-primary rounded-full" href="https://wa.me/19174001006">
              <img src="/img/whatsapp.png"/>
              1 (917) 400-1006
            </a>
          </article>
        </li>
        <li className="text-center">
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
        <li className="text-center">
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
        <li className="text-center">
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
    </nav>
  )
}

export default Drawer