"use client"

import React, {useId} from 'react'
import ServicesCard from '@/components/ServicesCard'
import { HiPlus } from 'react-icons/hi'
import { FiChevronRight } from 'react-icons/fi'

const servicesInfo = [
  {
    number: 1,
    title: "Truck Dispatching",
    className: "bg-service-truckdispatch  min-w-[340px] md:w-[500px] md:h-[200px]",
    fade: "fade-right",
    textDescription: "A to Z dispatch. We provide high paying loads. From calling the broker to getting the RC, we got you covered."
  },
  {
    number: 2,
    title: "Billing",
    className: "bg-service-billing  min-w-[340px] md:w-[500px] md:h-[200px]",
    fade: "fade-left",
    textDescription: "We will take care of the factoring."
  },
  {
    number: 3,
    title: "Paperwork",
    className: "bg-service-paperwork  min-w-[340px] md:w-[500px] md:h-[200px]",
    fade: "fade-right",
    textDescription: "We will take care of all the paperwork including PODs and Invoices."
  },
  {
    number: 4,
    title: "IFTA",
    className: "bg-service-ifta  min-w-[340px] md:w-[500px] md:h-[200px]",
    fade: "fade-left",
    textDescription: "Why paying extra for IFTA filing when we got it covered for you. We will do quarterly IFTAs including in the dispatch services."
  }
]

const HomeServices = () => {
  const id = useId()
  return (
    <section className="pt-56 pb-20 md:py-20 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col text-center items-center md:px-10 pb-10">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl pb-8 font-bold">Services</h2>
          </div>
          <h2 data-aos="fade-left" className="font-semibold text-primary text-2xl md:text-3xl">From 5% <br/> of Gross</h2>
        </div>
        <div className="flex justify-around items-center flex-wrap gap-8 mx-auto">
          {
            servicesInfo.map(({ number, title, className, fade, textDescription }) => (
              <div className="flex justify-center items-center" key={`${id}-${number}`}>
                <ServicesCard
                  number={number}
                  title={title}
                  className={className}
                  fade={fade}
                  textDescription={textDescription}
                />
              </div>
            ))
          }
        </div>
        <div data-aos="fade-up" className="w-full max-w-[1160px] h-[400px] md:h-[350px] mx-auto mt-8 group relative overflow-hidden bg-service-trailer-lease  p-10 text-white font-semibold rounded-xl">
          <div className="relative z-[9] flex items-center h-full">
            <h2 className="text-4xl md:text-6xl font-bold">Trailer Lease</h2>
          </div>
          
          <div className="absolute z-[8] transition-opacity opacity-30 md:opacity-100 ease-linear duration-200 md:group-hover:opacity-0 left-0 top-0 w-full h-full bg-primary">
          </div>
          <div className="absolute flex items-center h-full top-0 right-10 z-[9]">
            <HiPlus className="text-secondary text-4xl"/>
          </div>
          <div className="z-10 flex justify-center items-center transition-all ease-in duration-200 position absolute top-0 -right-24 group-hover:right-0 bg-secondary w-24 h-full">
            <FiChevronRight className="text-light text-3xl"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeServices