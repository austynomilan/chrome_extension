import React from 'react';
import Logo from '/images/HelpMeOut.png';

export default function Nav({ mobileNav, setMobileNav }) {
  const toggleMenu = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div class='relative flex justify-between pt-6 pb-6 pl-16 pr-16 items-center font-def border-b'>
      <div>
        <img src={Logo} alt='' srcset='' />
      </div>
        <div
          class={`absolute text-center ${
            !mobileNav ? 'invisible' : ''
          } top-24 right-0 z-10 w-1/2 bg-white h-screen md:visible md:top-8 md:right-12 md:flex md:justify-between md:w-1/2 md:h-0`}
        >
          <div class='block font-bold text-base md:flex'>
            <p class='mb-8 md:mr-5 md:mb-0'>Feature</p>
            <p>How it works</p>
          </div>
          <div></div>
          <p class='text-primary font-bold'>Get Started</p>
        </div>

      <div class='md:invisible md:relative'>
        {!mobileNav ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6 absolute'
            onClick={toggleMenu}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6 absolute'
            onClick={toggleMenu}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        )}
      </div>
    </div>
  );
}
