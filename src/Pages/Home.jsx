import React from 'react'

import HeroCarousel from '../Components/HeroCarousel'
import WhatWeDo from '../Components/WhatWeDo'
import WhyChooseUs from '../Components/WhyChooseUs'
import ProjectDetails from '../Components/ProjectDetails'
import OurClients from '../Components/OurClients'
import Testimonials from '../Components/Testimonials'
import CTA from '../Components/CTA'
import WhoWeAre from '../Components/WhoWeAre'

export default function Home() {
  return (
    <div className="">
        <HeroCarousel />
        <WhoWeAre />
        <WhyChooseUs />
        <WhatWeDo />
        <ProjectDetails />
        <Testimonials />
        <OurClients />
        <CTA />
    </div>
  )
}
