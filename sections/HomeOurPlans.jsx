"use client"

import React from 'react'
import { Link } from 'react-scroll'

const HomeOurPlans = () => {
  return (
    <section id="pricing" className="pt-10 pb-20">
      <h2 className="text-center text-4xl font-semibold pb-12">
        Our Plans
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-y-12 gap-x-32 px-8">
        <article data-aos="fade-right" className="w-full border shadow-2xl max-w-xs rounded-xl text-white">
          <div className="py-16 bg-gray-100 text-primary text-center">
            <h2 className="text-3xl font-semibold">5% of Gross</h2>
            <p className="text-sm text-accent">Per Month</p>
          </div>
          <ul className="bg-primary p-6 py-10 flex flex-col items-center rounded-b-xl list-disc">
            <li className="w-full max-w-[148px]">
              Truck Dispatching
            </li>
            <li className="w-full max-w-[148px]">
              Billing
            </li>
            <li className="w-full max-w-[148px]">
              Paperwork
            </li>
            <li className="w-full max-w-[148px]">
              IFTA
            </li>
            <li className="pt-[136px] flex justify-center">
              <button className="bg-secondary text-primary text-xl rounded px-10 py-3 font-semibold">
                <Link
                  activeClass='font-semibold text-primary'
                  offset={-115}
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Get a Dispatcher
                </Link>
              </button>
            </li>
          </ul>
        </article>

        <article data-aos="fade-left" className="w-full border shadow-2xl max-w-xs rounded-xl text-white">
          <div className="py-16 bg-gray-100 text-primary text-center">
            <h2 className="text-3xl font-semibold">8% of Gross</h2>
            <p className="text-sm text-accent">Per Month</p>
          </div>
          <ul className="bg-primary p-6 py-10 flex flex-col items-center rounded-b-xl list-disc">
            <li className="w-full max-w-[148px]">Truck Dispatching</li>
            <li className="w-full max-w-[148px]">Billing</li>
            <li className="w-full max-w-[148px]">Paperwork</li>
            <li className="w-full max-w-[148px]">IFTA</li>
            <li className="w-full max-w-[148px]">Compliance</li>
            <li className="w-full max-w-[148px]">UCR</li>
            <li className="w-full max-w-[148px]">MCS 150</li>
            <li className="w-full max-w-[148px]">Safety Audits</li>
            <li className="pt-10 flex justify-center">
              <button className="bg-secondary text-primary text-xl rounded px-10 py-3 font-semibold">
                <Link
                  activeClass='font-semibold text-primary'
                  offset={-115}
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Get a Dispatcher
                </Link>
              </button>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default HomeOurPlans