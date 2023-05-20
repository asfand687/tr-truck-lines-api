import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { HiPlus } from 'react-icons/hi'

const HomeOurVisionSection = () => {
  return (
    <div id="vision" data-aos="fade-up" className="w-full max-w-[1160px] h-[400px] md:h-[350px] mx-auto mt-8 group relative overflow-hidden bg-vision-section  p-10 text-white font-semibold rounded-xl">
      <div className="relative z-[9] flex items-center h-full">
        <h2 className="text-4xl md:text-6xl font-bold">Our Vision</h2>
        <p className="absolute w-[600px] transition-all ease-in-out duration-300 -right-full top-20 group-hover:right-20">
          At TR Truck Lines, we strive to disrupt the logistics landscape by providing cutting-edge, reliable freight dispatch solutions that prioritize customer satisfaction. Our vision is to empower businesses with the resources to streamline their operations, enhance efficiency, and gain a competitive advantage.
        </p>
      </div>

      <div className="absolute z-[8] transition-opacity opacity-30 md:opacity-100 ease-linear duration-200 md:group-hover:opacity-0 left-0 top-0 w-full h-full bg-primary">
      </div>
      <div className="absolute flex items-center h-full top-0 right-10 z-[9]">
        <HiPlus className="text-secondary text-4xl" />
      </div>
      <div className="z-10 flex justify-center items-center transition-all ease-in duration-200 position absolute top-0 -right-24 group-hover:right-0 bg-secondary w-24 h-full">
        <FiChevronRight className="text-light text-3xl" />
      </div>
    </div>
  )
}

export default HomeOurVisionSection