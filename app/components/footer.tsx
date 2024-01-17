'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/gt-super/GT-Super-Text-Regular-Trial.otf",
      weight: '400',
      style: 'normal',
    },
  ],
})

export function Footer() {
  return (
    <footer className={`${myFont.className} bg-neutral-700 text-white p-8`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* Información de contacto */}
        <div className="mx-auto text-center mb-8 sm:mb-0">
          <p className="mb-2">info@gtrentbarcelona.com</p>
          <p className="mb-2">+34 682 109 660</p>
          <p className="mb-2">Passeig d'Ítaca S/N, Moll d'Espanya</p>
          <p>08039 Barcelona (Maremagnum Shopping Center)</p>
        </div>
        <div className="mx-auto text-center mb-8 sm:mb-0">
          <Link href="https://tarragonacb.cat/">
            <Image
              src="/certifieds/Certificado1.png"
              width={150}
              height={150}
              className="shado-2xl"
              alt="Certificado-tarragonacb"
            />
          </Link>
          <Link href='https://www.barcelonaconventionbureau.com/'>
            <Image
              src="/certifieds/Certificado2.png"
              width={150}
              height={150}
              className="shado-2xl"
              alt="Certificado-barcelona-convention-bureau"
            />
          </Link>
        </div>

        {/* Redes sociales */}
        <div className='mx-auto grid grid-cols-3 sm:grid-cols-3 space-x-2 md:grid-cols-3 p-4'>
          <Link className='' href="https://instagram.com">
            <Image
              src="/instagram-icon.svg"
              width={48}
              height={48}
              className="shado-2xl"
              alt="GT Rent logo"
            />
          </Link>
          <Link href="https://facebook.com">
            <Image
              src="/facebook-icon.svg"
              width={48}
              height={48}
              className="shado-2xl"
              alt="GT Rent logo"
            />
          </Link>
          <Link href="https://twitter.com">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
          </Link>
        </div>
      </div>

      <div className="py-5 container mx-auto text-center">
        <p className="text-sm md:text-base lg:text-lg xl:text-sm mb-2">
          GT Rent Barcelona - EPCARSGT SL{' '}
        </p>
        <p className="text-sm md:text-base lg:text-lg xl:text-sm mb-2">
          &copy; 2024. All rights reserved.{' '}
        </p>
        <p className="text-sm md:text-base lg:text-lg xl:text-sm">
          <a href="/terms" className="text-blue-500 hover:underline">
            Términos y condiciones
          </a>{' '}
          |{' '}
          <a href="/privacy" className="text-blue-500 hover:underline">
            Política de privacidad
          </a>
        </p>
      </div>
    </footer>
  )
}
