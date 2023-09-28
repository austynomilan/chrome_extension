import React from 'react';
import Dot from '/images/dot.png';
import Send from '/images/send.png';
import Revisit from '/images/revisit.png';
import Repo from '/images/Repository.png'

export default function section2() {
  return (
    <div class="mt-36 mb-32">
      <div class="top-10 text-center">
        <p class="font-sora font-bold text-4xl">Features</p>
        <p class="font-def text-xl text-gray-500">Key Highlights of Our Extension</p>
      </div>
      <div class="flex mt-10 items-center justify-between ">
        <div class="ml-14">
          <div class="flex mb-14">
            <div>
              <img class="mr-2 w-8 h-8" src={Dot} alt='icon' />
            </div>
            <div>
              <p class="font-inter font-bold text-28l">Simple Screen Recording</p>
              <p class="font-def font-xl">
                Effortless screen recording for everyone. Record <br />
                with ease, no tech expertise required.
              </p>
            </div>
          </div>
          <div class="flex mb-14">
            <div>
              <img class="mr-2 w-8 h-8" src={Send} alt='icon' />
            </div>
            <div>
              <p class="font-inter font-bold text-28l">Easy-to-Share URL</p>
              <p class="font-def font-xl">
                Share your recordings instantly with a single link. <br /> No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div class="flex mt-14">
            <div>
              <img class="mr-2 w-8 h-8" src={Revisit} alt='icon' />
            </div>
            <div>
              <p class="font-inter font-bold text-28l">Revisit Recordings</p>
              <p class="font-def font-xl">
                Access and review your past content effortlessly. <br /> Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div class="mr-20">
            <img class="w-636 h-454" src={Repo} alt="screen shot" />
        </div>
      </div>
    </div>
  );
}
