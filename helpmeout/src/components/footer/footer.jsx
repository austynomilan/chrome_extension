import React from 'react'
import Logo from '/images/lgw.png'

export default function footer() {
  return (
    <div class="grid grid-cols-7 justify-between h-347 bg-primary">
      <div class="col-span-2">
        <img src={Logo} alt="logo"/>
      </div>
      <div class="col-span-5 flex justify-between text-white">
        <div>
        <ul>
            <li>Menu</li>
            <li>Home</li>
            <li>Converter</li>
            <li>How it works</li>
        </ul>
      </div>
      <div>
        <ul>
            <li>About us</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <ul>
            <li>Screen Record</li>
            <li>Browser Window</li>
            <li>Desktop</li>
            <li>Application</li>
        </ul>
      </div>
      </div>
      
    </div>
  )
}
