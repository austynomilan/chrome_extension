import React from 'react';
import REC from '/images/vidREc.png';

export default function section3() {
  return (
    <div>
      <div>
        <p class="text-center font-sora font-bold text-40l mb-32">How it works</p>
      </div>
      <div class="md:flex items-center justify-center">
        <div class="text-center relative">
         <div class="circle">
         <p class="text-white font-inter text-3xl font-bold">1</p>
        </div> 
          <p class="inter font-bold text-28l text-se">Record Screen</p>
          <p class="text-def text-xl text-ter">
            Click the "Start Recording" button in <br /> our extension. choose
            which part <br />
            of your screen to capture and who <br /> you want to send it to.
          </p>
          <img class="mt-10 mb-20 md:mb-0" src={REC} alt='record' />
        </div>
        <div class="text-center relative">
            <div class="circle">
            <p class="text-white font-inter text-3xl font-bold">2</p>
            </div>
          
          <p class="inter font-bold text-28l text-se">Share Your Recording</p>
          <p class="text-def text-xl text-ter">
            We generate a shareable link for <br />
            your video. Simply send it to your <br /> audience via email or copy
            the link <br /> to send via any platform.
          </p>
          <img class="mt-10 mb-20 md:mb-0" src={REC} alt='record' />
        </div>
        <div class="text-center relative">
            <div class="circle">
              <p class="text-white font-inter text-3xl font-bold">3</p>  
            </div>
          
          <p class="inter font-bold text-28l text-sec">Learn Effortlessly</p>
          <p class="text-def text-xl text-ter">
            Recipients can access your video <br />
            effortlessly through the provided <br />
            link, with our user-friendly interface <br />
            suitable for everyone.
          </p>
          <img class="mt-10 " src={REC} alt='record' />
        </div>
      </div>
    </div>
  );
}
