'use client'
 
import React from 'react';

export default function BannerExperiences() {
     
  return (
    <div className=''>
      <div className='hero__bg'>
        <video
          className="hero__bg hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="./banner/FerrariRoma.jpg" // Agrega una imagen de poster
          >
          <source src="./experiences/experiences-banner.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>

        {/* Contenido del banner */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-stone-800 from-10% to-transparent to-40%">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Your drive
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              Live the most amazing experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
