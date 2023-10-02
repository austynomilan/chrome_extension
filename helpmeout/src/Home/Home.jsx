import React, {useState} from 'react'
import Nav from '../components/navBar/Nav'
import Section1 from '../components/homeLanding/section1/section1'
import Section2 from '../components/homeLanding/section2/section2'
import Section3 from '../components/homeLanding/section3/section3'
import Footer from '../components/footer/footer'

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false)
  return (
    <div>
        <Nav mobileNav={mobileNav}  setMobileNav={setMobileNav}/>
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
    </div>
  )
}
