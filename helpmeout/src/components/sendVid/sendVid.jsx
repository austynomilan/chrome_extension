import React from 'react';
import Kite from '/images/kite.png'
import { BsFillSendFill } from 'react-icons/bs'

export default function sendVid({ toggleSent }) {
  return (
    <div class='absolute flex justify-center text-center bg-black opacity-90 h-full w-full top-0'>
      <div class='bg-white h-454 mt-36 w-96 rounded-3xl relative'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          onClick={toggleSent}
          class='w-6 h-6 absolute cursor-pointer text-primary-100 right-6 top-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <BsFillSendFill size={60} class="absolute right-40 top-8 text-primary-100"/>
        <div class="absolute top-28 right-10">
            <p class="font-semibold font-def text-xl mb-10">Your video link has been sent to <br />
            <span class="text-primary-100 font-semibold font-def text-xl">johnmark@gmail.com</span></p>
            <p class="font-def ">Would you need to view this video later? <br /> Save to your account now!</p>
            <button class="bg-primary-100 text-white mt-10 mb-10 rounded-lg w-36 h-12 font-def">Save Video</button>
            <p class="font-sora text-gray-500">Don't have account?<span class="text-primary-100 font-sora font-semibold ml-1 cursor-pointer">Create account</span></p>
        </div>
      </div>
    </div>
  );
}
