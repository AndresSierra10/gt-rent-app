import React from 'react';
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    {
      path: "../../../public/fonts/gt-super/GT-Super-Text-Book-Trial.otf",
      weight: '400',
      style: 'normal',
    },
  ],
})

export default function ProposeTextSection() {
  return (
    <section className={`${myFont.className} bg-stone-800 py-16 px-4`} >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl text-center text-white mb-16">Just live the experience now</h2>
        <div className='text-center text-white'>
            <p>
            You’re looking to elevate your emotions with the most amazing experiences,
            <br></br>
            there is no better answer than Gt rent barcelona...
            </p>
        </div>
      </div>
    </section>
  );
};
