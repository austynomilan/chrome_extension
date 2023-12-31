import React from 'react';
import GridGray from '/images/gridGray.png'
import GridColor from '/images/gridColor.png'
import Img1 from '/images/img1.png'
import Img2 from '/images/img2.png'
import Img3 from '/images/img3.png'

export default function section1() {
  return (
    <div class=" md:flex items-center mt-16 justify-center ">
        <div class="mr-10">
        <p class="text-4xl font-bold font-sora">
        Show Them <br />
        Don't Just Tell
      </p>
      <p class="font-inter-400 text-xl mt-4 mb-10">
        Help your friends and loved ones by creating and sending <br />
        videos on how to get things done on a website.
      </p>
      <div class="flex w-60 border-2 bg-primary-100 text-white h-16 rounded-lg items-center justify-center">
        <p class="text-lg font-def">Inatall HelpMeOut</p>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-5 h-5 ml-3'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
            />
          </svg>
        </span>
      </div>
        </div>
        <div class="mt-10 flex md:mt-3">
           <div class="relative">
            <img class="w-50 h-32 md:w-80 md:h-52" src={Img1} alt="woman with headset"/>
            <img class="mt-4 w-50 h-32 md:w-80 md:h-52 md:mt-8" src={Img2} alt="a Man with son"/>
            <img class="absolute w-76 top-235 right-10 -z-10" src={GridColor} alt="grid colors"/>
            </div> 
           <div class="relative">
           <img class="ml-4 h-72 md:ml-8" src={Img3} alt="woman with headset"/>
           <img class="absolute w-76 -top-14 -z-10 -right-12" src={GridGray} alt="gray grid" />
           </div>
        </div>
     
    </div>
  );
}
