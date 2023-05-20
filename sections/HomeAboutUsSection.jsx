import React from 'react'
import HomeLocationSection from '@/sections/HomeLocationSection'

const HomeAboutUsSection = () => {
  return (
    <section id="about">
      <div className="px-4">
        <article className="pb-6">
          <h2 className="text-4xl font-semibold text-center pb-4">About Us</h2>
          <div className="w-full max-w-4xl mx-auto space-y-3">
            <p data-aos="fade-right">
              TR Truck Lines is a freight dispatch company that offers reliable and efficient freight dispatch services. They have an experienced team that provides customized freight solutions to meet the unique needs of each carrier. Their services include carrier selection, load planning, route optimization, real-time tracking, and more. They are committed to providing the highest level of customer service and satisfaction.
            </p>
          </div>
        </article>
      </div>
      <HomeLocationSection/>      
    </section>
  )
}

export default HomeAboutUsSection