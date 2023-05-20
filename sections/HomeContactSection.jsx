import React from 'react'
import ContactForm from '@/components/ContactForm'

const HomeContactSection = () => {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-y-6 items-center justify-center gap-x-24">
        <article data-aos="fade-right" className="max-w-xs">
          <h2 className="text-secondary font-semibold pb-4 text-4xl">Get in touch</h2>
          <div className="text-accent space-y-4">
            <div>
              <h3 className="text-secondary text-xl">
                Phone
              </h3>
              <p>+1 (917) 400-1006</p>
            </div>
            <div>
              <h3 className="text-secondary text-xl">
                Email
              </h3>
              <p>trtrucklines@gmail.com</p>
            </div>

            <div>
              <h3 className="text-secondary text-xl">
                Address
              </h3>
              <p>
                TR Truck Lines LLC, 225 Avenel St STE 108 Avenel, NJ 07001
              </p>
            </div>
          </div>
        </article>
        <article>
          <ContactForm />
        </article>
      </div>
    </section>
  )
}

export default HomeContactSection