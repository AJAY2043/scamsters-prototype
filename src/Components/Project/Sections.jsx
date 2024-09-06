import React from 'react'
import Hero from '../Hero/Hero'
import Blog from '../Blogs/Blogs'
import Testimonals from '../Testimonals/Testimonals'
// import CallToAction from '../CallToAction/CallToAction'
import NewsLetter from '../NewsLetter/NewsLetter'
import ContactUs from '../ContactUs/ContactUs'
import FAQ from '../FAQ/FAQ'

const Sections = () => {
  return (
    <div>
      <Hero/>
      <Blog/>
      <Testimonals/>
      {/* <CallToAction/> */}
      <NewsLetter/>
      <ContactUs/>
      <FAQ/>
      
    
    </div>
  )
}

export default Sections
