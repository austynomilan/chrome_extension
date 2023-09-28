import React from 'react';
import Logo from '/images/HelpMeOut.png';

export default function Nav() {
  return (
    <div class='flex justify-between pt-6 pb-6 pl-10 pr-10 items-center font-def border-b'>
      <div>
        <img src={Logo} alt='' srcset='' />
      </div>
      <div class='flex font-bold text-base'>
        <p class="mr-5">Feature</p>
        <p>How it works</p>
      </div>
      <div>
        <p class="text-primary font-bold">Get Started</p>
      </div>
    </div>
  );
}
