'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image'; 

export function Navbar() {
  const pathname = usePathname()
  const [nav, setNav] = useState(false)

  // Función para cambiar el idioma
  function switchLocale(locale: string) {
    const newPath = `/${locale}${pathname}`
    window.history.replaceState(null, '', newPath)
  }

  const links = [
    { id: 1, link: 'experiences'},
    { id: 2, link: 'cars', dropdownItems: ['Ferrari', 'Lamborghini', 'Ford mustang']},
    { id: 3, link: 'rental' },
    { id: 4, link: 'what we offer'},
    { id: 5, link: 'contact us' },
  ]

  return (
    <nav className="nav">
      <Link href="/">
        <Image
          src="/gtrent_logo.png" // Usar un formato relativo para la ruta de la imagen
          width={150}
          height={150}
          className="shado-2xl"
          alt="GT Rent logo"
          
        />
      </Link>
      <ul className="hidden md:flex">
        {links.map(({ id, link, dropdownItems  }) => (
          <li
            key={id}
            className="nav-links text-lg px-6 cursor-pointer capitalize font-medium text-white-500 hover:scale-125 hover:text-blue-500 duration-200 link-underline"
          >

          {dropdownItems ? (
            <div className="relative group">
              <span>{link}</span>
              <ul className="absolute hidden mt-4 space-y-25 bg-sky-400 text-white group-hover:block rounded-md">
                {dropdownItems.map((item, index) => (
                  <li key={index} className="px-4 py-1">{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <Link id='1' href={`../experiences-detail`}>{link}</Link>
          )}
          </li>
        ))}
      </ul>

      {/* Icono de menú para versión móvil */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen bg-gradient-to-b from-black to-stone-700 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={`/${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ul className="px-1 cursor-pointer">
        {/* Agregar botones para cambiar el idioma */}
        <button onClick={() => switchLocale('en')}>English</button>
      </ul>
    </nav>
  )
}
