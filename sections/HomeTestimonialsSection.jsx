import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: "Jason Anderson",
    business: "Rapid Transport Inc.",
    mcNumber: 93874,
    image: "/img/testimonial-01.png",
    title: "Reliable, Professional, and Efficient Services",
    review: "I've been working with TR Truck Lines for several months now and I have to say, they are the best in the business! They are always reliable, professional, and efficient. They have helped me streamline my transportation operations and I couldn't be happier with their services. I highly recommend them to anyone in the industry."
  },
  {
    name: "Robert Thompson",
    business: "Pacific Coast Trucking",
    mcNumber: 54281,
    image: "/img/testimonial-02.png",
    title: "Dependable, Expert, and Streamlined Solutions",
    review: "I was hesitant to use a truck dispatching company at first, but I'm so glad I found TR Truck Lines. Their team is knowledgeable, friendly, and always willing to go the extra mile to make sure everything runs smoothly. They have saved me so much time and money, and I couldn't be happier with their services. They are truly a top-notch company!"
  },
  {
    name: "Michael Davis",
    business: "Mountain View Logistics",
    mcNumber: 78432,
    image: "/img/testimonial-03.png",
    title: "Trustworthy, Skilled, and Seamless Operations",
    review: "As a small business owner, I was struggling to keep up with my transportation needs. But ever since I started working with TR Truck Lines, my stress levels have gone down significantly. They are always prompt, professional, and communicative. They make sure all of my deliveries are on time and in great condition. I highly recommend them to anyone in need of reliable transportation services!"
  }
]

const HomeTestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-semibold pb-16">
        Here is what our clients say about us
      </h2>
      <div className="w-full">
        <section className="relative max-w-[360px] md:max-w-[630px] mx-auto">
          <button disabled={currentSlide === 0} className="absolute z-20 top-10 md:top-44 text-4xl left-10 md:-left-20 text-accent" onClick={() => setCurrentSlide(currentSlide - 1)}>
            <FaChevronLeft />
          </button>
          <button disabled={currentSlide === 2} className="absolute z-20 top-10 md:top-44 text-4xl right-10 md:-right-20 text-accent" onClick={() => setCurrentSlide(currentSlide + 1)}>
            <FaChevronRight />
          </button>
          <div key="Ornament top" className="absolute -right-16 -top-14 z-0 text-accent">
            <img src="/img/ornament.svg" alt="Ornament"/>
          </div>
          <div key="Ornament bottom" className="absolute -left-12 -bottom-12 z-0 text-accent">
            <img src="/img/ornament.svg" alt="Ornament"/>
          </div>
          <div className="relative z-10 overflow-hidden">
            <div className={`flex rounded-xl transition-transform ease-in-out duration-300 ${currentSlide === 0 ? "translate-x-0" : currentSlide === 1 ? "-translate-x-[360px] md:-translate-x-[630px]" : "-translate-x-[720px] md:-translate-x-[1260px]"}`}>
              {
                testimonials.map(testimonial => (
                  <article
                    key={testimonial.name}
                    className="min-w-[360px] md:min-w-[630px] text-center bg-primary p-6 rounded-lg"
                  >
                    <div className="text-accent">
                      <div className="space-y-3">
                        <img className="mx-auto w-20 h-20" src={testimonial.image} alt={testimonial.name} />
                        <h4 className="text-lg">{testimonial.name}</h4>
                      </div>
                      <div className="text-sm">
                        <h5>{testimonial.business}</h5>
                        <h5><strong>MC # {testimonial.mcNumber}</strong></h5>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold pb-2 text-secondary">
                      {testimonial.title}
                    </h3>
                    <p className="text-accent leading-6">
                      {testimonial.review}
                    </p>
                  </article>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default HomeTestimonialsSection