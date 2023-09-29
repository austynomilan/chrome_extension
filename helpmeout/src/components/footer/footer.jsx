import React from 'react'
import Logo from '/images/lgw.png'

export default function footer() {
  return (
    <div class="grid grid-cols-7 justify-between h-347 bg-primary">
      <div class="col-span-2 mt-32 ml-36">
        <img src={Logo} alt="logo"/>
      </div>
      <div class="col-span-5 flex items-center justify-between text-white">
        <div>
        <ul>
            <li class="pb-3 font-sora font-bold text-base">Menu</li>
            <li class="pb-3 text-base font-def-600">Home</li>
            <li class="pb-3 text-base font-def-600">Converter</li>
            <li>How it works</li>
        </ul>
      </div>
      <div>
        <ul>
            <li class="pb-3 font-sora font-bold text-base">About us</li>
            <li class="pb-3 text-base font-def-600">About</li>
            <li class="pb-3 text-base font-def-600">Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div class="mr-36">
        <ul>
            <li class="pb-3 font-sora font-bold text-base">Screen Record</li>
            <li class="pb-3 text-base font-def-600">Browser Window</li>
            <li class="pb-3 text-base font-def-600">Desktop</li>
            <li>Application</li>
        </ul>
      </div>
      </div>
      
    </div>
  )
}
