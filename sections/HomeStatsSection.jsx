import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaMoneyCheckAlt, FaWeightHanging } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { FiChevronRight } from 'react-icons/fi'


const HomeStatsSection = () => {
  return (
    <section className="px-4">
      <div data-aos="fade-up" className="w-full max-w-[1160px] md:h-[380px] mx-auto mt-8 group relative overflow-hidden bg-our-milestones p-12 text-white font-semibold rounded-xl">
        <h2 className="hidden md:block absolute top-32 group-hover:top-12 left-12 z-[12] transition-all ease-out duration-300 text-4xl pb-6 md:text-6xl font-bold text-center md:text-left">Our Milestones</h2>
        <div className="relative z-[9] md:z-[7] h-full">
          <div>
            <h2 className="block md:hidden text-4xl pb-6 md:text-6xl font-bold text-center md:text-left">Our Milestones</h2>
            <div className="flex flex-col md:flex-row gap-y-10 md:pt-[84px]">
              <article className="flex px-8 flex-col items-center text-center md:border-r-[0.25px] border-gray-500">
                <TbTruckDelivery className="text-secondary text-6xl md:text-8xl pb-4" />
                <div>
                  <h2 className=" pb-2 text-3xl md:text-6xl font-bold">5000+</h2>
                  <p className="text-2xl">Freight Loads Moved</p>
                </div>
              </article>
              <article className="flex px-8 flex-col items-center text-center md:border-r-[0.25px] border-gray-500">
                <FaMoneyCheckAlt className="text-secondary text-6xl md:text-8xl pb-4" />
                <div>
                  <h2 className=" pb-2 text-3xl md:text-6xl font-bold">$7500 +</h2>
                  <p className="text-2xl">Average Gross Revenue</p>
                </div>
              </article>
              <article className="flex px-8 flex-col items-center text-center">
                <FaWeightHanging className="text-secondary text-6xl md:text-8xl pb-4" />
                <div>
                  <h2 className=" pb-2 text-3xl md:text-6xl font-bold">58</h2>
                  <p className="text-2xl">Mln Lbs Dispatched</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="absolute z-[8] transition-opacity opacity-30 md:opacity-100 ease-linear duration-200 md:group-hover:opacity-10 left-0 top-0 w-full h-full bg-primary">
        </div>
        <div className="absolute flex items-center h-full top-0 right-10 z-[9]">
          <HiPlus className="text-secondary text-4xl" />
        </div>
        <div className="z-10 flex justify-center items-center transition-all ease-in duration-200 position absolute top-0 -right-24 group-hover:right-0 bg-secondary w-24 h-full">
          <FiChevronRight className="text-light text-3xl" />
        </div>
      </div>
    </section>
  )
}

export default HomeStatsSection