import React from 'react';

export default function save() {
  return (
    <div class="bg-input h-80 text-center pt-10">
      <p class="font-sora font-semibold text-2xl">
        To ensure the availability and privacy of your video, <br /> we
        recommend saving it to your account.
      </p>
      <button class="bg-primary-100 text-white mt-10 mb-10 rounded-lg w-36 h-12 text-base font-def font-medium">Save Video</button>
      <div class="flex justify-center">
        <p class="font-sora text-2xl font-semibold text-gray-500">Don't have an account?</p>
      <span class="cursor-pointer font-sora text-2xl font-semibold text-primary-100">Create account</span>
      </div>
    </div>
  );
}
