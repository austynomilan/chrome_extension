import React from 'react'
import Nav from '../components/navBar/Nav'
import Vidscreen from '../components/vid/vidscreen'
import Footer from '../components/footer/footer'
import Save from '../components/SaveVid/save'

export default function recorded() {
  return (
    <div>
        <Nav />
        <Vidscreen />
        <Save />
        <Footer />
    </div>
  )
}
