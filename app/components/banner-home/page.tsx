'use client'
 
import React from 'react';

export default function BannerHome() {
     
  return (
    <div className="w-full h-full">
      <video
        className="w-full h-100 object-cover"
        autoPlay
        muted
        loop
        playsInline
        >
        <source src="https://download-video.akamaized.net/v3-1/playback/60f42b5c-5b94-4627-a167-e679e6cd865f/c15b92b3-fb57c719?__token__=st=1705345992~exp=1705360392~acl=%2Fv3-1%2Fplayback%2F60f42b5c-5b94-4627-a167-e679e6cd865f%2Fc15b92b3-fb57c719%2A~hmac=d52e62425ad0abe7576cf5b01ed5b98c063e3cd3c273654ec9207df5cd6ee2c6&r=dXMtd2VzdDE%3D" type="video/mp4" />
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
  )
}
