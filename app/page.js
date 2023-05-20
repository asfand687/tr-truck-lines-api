"use client"

import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import ContactFormModal from '@/components/ContactFormModal'
import HomeHero from '@/sections/HomeHero'
import HomeStatsSection from '@/sections/HomeStatsSection'
import HomeServices from '@/sections/HomeServices'
import HomeOurPlans from '@/sections/HomeOurPlans'
import HomeAboutUsSection from '@/sections/HomeAboutUsSection'
import HomeOurVisionSection from '@/sections/HomeOurVisionSection'
import HomeTestimonialsSection from '@/sections/HomeTestimonialsSection'
import HomeContactSection from '@/sections/HomeContactSection'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <main className="overflow-hidden">
      <HomeHero/>
      <HomeStatsSection/>
      <ContactFormModal/>
      <HomeServices/>
      <HomeOurPlans/>
      <HomeAboutUsSection/>
      <HomeOurVisionSection/>
      <HomeTestimonialsSection/>
      <HomeContactSection/>
    </main>
  )
}
