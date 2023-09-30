import React, { useState } from 'react'
import Nav from '../components/navBar/Nav'
import Vidscreen from '../components/vid/vidscreen'
import Footer from '../components/footer/footer'
import Save from '../components/SaveVid/save'
import SendVid from '../components/sendVid/sendVid'

export default function recorded() {
  const [sent, setSent] = useState(false)

  const toggleSent = () =>{
    setSent(!sent)
  }
  return (
    <div class="relative">
        <Nav />
        <Vidscreen toggleSent={toggleSent}/>
        {sent && <SendVid toggleSent={toggleSent} />}
        <Save />
        <Footer />
    </div>
  )
}
