import React from 'react';
import { FaFacebook, FaWhatsapp, FaTelegram } from 'react-icons/fa';

export default function vidscreen({ toggleSent }) {
  return (
    <div class='flex justify-around ml-20 w-1440 mr-20 mt-10'>
      <div>
        <p class='text-5xl font-bold font-sora'>Your video is ready!</p>
        <div>
          <p class='mt-10 text-base font-sora'>Name</p>
          <span class='flex items-center'>
            <p class='text-primary-400 text-2xl font-semibold'>
              Untitled_Video_20232509{' '}
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6 text-primary-400 ml-3'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
              />
            </svg>
          </span>
          <div class='mt-10 h-68 w-550 bg-input rounded-2xl flex items-center justify-between'>
            <input
              class='bg-transparent outline-none border-0 w-427 placeholder: ml-4 text-lg text-def text-internals '
              type='text'
              placeholder='enter email of receiver'
            />
            <span onClick={toggleSent} class='bg-primary-300 cursor-pointer text-white h-11 w-75 items-center flex justify-center rounded-lg text-manrope mr-5'>
              Send
            </span>
          </div>
          <p class='mt-10 text-sora font-semibold'>Video Url</p>
          <div class='flex h-68 bg-copy rounded-2xl w-550 items-center justify-between'>
            <p class='text-base font-def text-internals '>
              https://www.helpmeout/Untitled_Video_20232509
            </p>
            <span class='flex cursor-pointer items-center mr-2 justify-center w-24 h-11  border-2 rounded-lg border-primary-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6 text-primary-100 mr-1'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
                />
              </svg>
              <p class='text-primary-100'>Copy</p>
            </span>
          </div>
          <p class=' mt-10 mb-2 text-base text-primary-100 font-semibold font-sora'>
            Share your video
          </p>
          <div class='flex'>
            <div class='mr-2'>
              <span class='social'>
                <FaFacebook color='blue' />
                <p class='text-base font-inter font-medium ml-1'>Facebook</p>
              </span>
            </div>
            <div class='mr-2'>
              <span class='social'>
                <FaWhatsapp color='green' />
                <p class='text-base font-inter font-medium ml-1'>WhatsApp</p>
              </span>
            </div>
            <div>
              <span class='social'>
                <FaTelegram color='skyblue' />
                <p class='text-base font-inter font-medium ml-1'>Telegram</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='w-575 h-454 bg-slate-500'></div>
        <p>Transcript</p>
        <select name='language'>
          <option value='volvo'>English</option>
          <option value='volvo'>French</option>
        </select>
        <div class='flex w-575 h-auto'>
          <span class='mr-2 '>0.01</span>
          <p class='text-base font-medium font-inter'>
            First step. Open Facebook on your desktop or mobile device and
            locate "Marketplace" in the left-hand menu or at the top of the{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
