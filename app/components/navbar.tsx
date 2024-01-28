'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    {
      path: '../../public/fonts/monument-extended/MonumentExtended-Regular.otf',
      weight: '100',
      style: 'sans-serif',
    },
  ],
})

export function Navbar() {
  const pathname = usePathname()
  const [nav, setNav] = useState(false)

  // Función para cambiar el idioma
  function switchLocale(locale: string) {
    const newPath = `/${locale}${pathname}`
    window.history.replaceState(null, '', newPath)
  }

  const [selectedFlag, setSelectedFlag] = useState('eeuu');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFlagClick = (flag) => {
    setSelectedFlag(flag);
    setIsOpen(false);
  };

  const links = [
    { id: 1, link: 'experiences', dropdownItems: ['Route beach Barceloneta 20min desde 99€',
     'Route SeaPort of sitges']},
    { id: 2, link: 'cars', dropdownItems: ['Ferrari F430', 'Lamborghini Evo', 'Ford Mustang GT', 'Porshe 911']},
    { id: 3, link: 'rental' },
    { id: 4, link: 'what we offer'},
    { id: 5, link: 'contact us' },
  ]

  return (
    <nav  className={` ${myFont.className} nav`}>
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
        {links.map(({ id, link, dropdownItems }) => (
          <li key={id} className="nav-links text-sm px-5 py-15 cursor-pointer text-transform: uppercase hover:scale-95 hover:text-blue-500 duration-200 relative">
            {dropdownItems ? (
              <div className="group">
                <span>{link}</span>
                <ul className="absolute hidden left-0 top-5 mt-2 px-8 py-3 -translate-x-7 whitespace-nowrap text-transform: capitalize bg-stone-200 bg-opacity-95 text-black group-hover:block rounded-lg">
                  {dropdownItems.map((item, index) => (
                    <li key={index} className="px-2 py-2">
                      <Link href={`/${item}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="18.66"
                  height="9.85"
                  viewBox="0 0 18.66 9.85"
                  className="absolute right-0 ml-2 -mr-1 top-1/2 transform -translate-y-1/2"
                >
                  <polyline points="0.59 0.59 9.76 9.02 18.07 0.59"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.19">
                  </polyline>
                </svg>
              </div>
            ) : (
              <Link href={`/${link.replace(/\s+/g, '-').toLowerCase()}`}>{link}</Link>
          )}
          </li>
        ))}
      </ul>

      <ul className="cursor-pointer">
        {/* Agregar botones para cambiar el idioma */}
        <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full px-4 py-2"
      >
        <Image
          src={`/flags/${selectedFlag}-flag.svg`}
          alt={selectedFlag}
          width={24}
          height={24}
          className="rounded-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 ml-2 -mr-1 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-4 mt-0 mr-20 w-24 rounded-md">
          <div className="py-1">
            <button
              onClick={() => handleFlagClick('spain')}
              className="block w-full px-4 py-2 text-sm text-black flex items-center space-x-2 hover:bg-stone-200 hover:bg-opacity-95 rounded-lg"
            >
              <Image
                src="/flags/spain-flag.svg"
                alt="Spain"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>es</span>
            </button>
            <button
              onClick={() => handleFlagClick('eeuu')}
              className="block w-full px-4 py-2 text-sm text-black flex items-center space-x-2 hover:bg-stone-200 hover:bg-opacity-95 rounded-lg"
            >
              <Image
                src="/flags/eeuu-flag.svg"
                alt="USA"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>en</span>
            </button>
            <button
              onClick={() => handleFlagClick('france')}
              className="block w-full px-4 py-2 text-sm text-black flex items-center space-x-2 hover:bg-stone-200 hover:bg-opacity-95 rounded-lg"
            >
              <Image
                src="/flags/france-flag.svg"
                alt="France"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>fr</span>
            </button>
          </div>
        </div>
      )}
      </ul>

      {/* Icono de menú para versión móvil */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden"
      >
        {nav ? <FaBars size={20} /> : <FaBars size={20} />}
      </div>
      {nav && (
        <ul className="absolute top-12 mt-2 ml-64 mr-2 bg-stone-200 bg-opacity-95 group-hover:block rounded-lg">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-2 cursor-pointer capitalize py-2 text-sm text-black rounded-lg"
            >
              <Link onClick={() => setNav(!nav)} href={`/${link}-detail`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        
      )}
    </nav>
  )
}
