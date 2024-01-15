'use client'

import React from 'react';

export default function VideoSection() {
  return (
    <section className="bg-stone-800 py-6 px-6 bg-gradient-to-t from-stone-500 to-transparent to-20%">
      <div className="container mx-auto grid element lg:grid-cols-3 gap-8">
        {/* Video 1 */}
        <div className="relative overflow-hidden rounded-lg">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="./experiences/experiences-banner.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                City routes
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Experience
              </p>
            </div>
          </div>
        </div>

        {/* Video 2 */}
        <div className="relative overflow-hidden rounded-lg">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="./banner/videoTest.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Countryside routes
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Experience
              </p>
            </div>
          </div>
        </div>

        {/* Video 3 */}
        <div className="relative overflow-hidden rounded-lg">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="./banner/videoTest.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Rental car
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
