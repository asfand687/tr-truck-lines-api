import React from 'react'

const HomeLocationSection = () => {
  return (
    <section data-aos="flip-up" className="flex flex-col md:pb-0 md:pt-20 text-center md:text-left gap-y-10 md:gap-y-0">
      <h2 className="text-3xl text-center font-semibold pb-6">
        Located in Avnel NJ
      </h2>
      <article className='flex-1 overflow-x-hidden'>
        <img className="w-full h-[500px] object-cover" src="/img/map.png" alt="Map" />
      </article>
    </section>
  )
}

export default HomeLocationSection