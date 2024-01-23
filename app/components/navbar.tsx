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
    { id: 1, link: 'experiences', dropdownItems: ['City routes', 'Countryside routes']},
    { id: 2, link: 'cars', dropdownItems: ['Ferrari F430', 'Lamborghini Evo', 'Ford Mustang GT', 'Porshe 911']},
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
            className="nav-links text-sm px-5 cursor-pointer text-transform: uppercase font-extrabold hover:scale-95 hover:text-blue-500 duration-200 link-underline"
          >

          {dropdownItems ? (
            <div className="relative group text-center">
              <span>{link}</span>
              <ul className="fixed hidden px-8 space-y-25 py-4 text-transform: capitalize bg-stone-200 bg-opacity-95 text-black font-extrabold group-hover:block rounded-md">
                {dropdownItems.map((item, index) => (
                  <li key={index} className="px-2 py-2">
                    <a>{item}</a>
                  </li>
                ))}
              </ul>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18.66"
                height="9.85"
                viewBox="0 0 18.66 9.85"
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
            <Link id="1" href={`../experiences-detail`}>{link}</Link>
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
        <ul className="flex flex-col justify-center items-center absolute top-12 h-22 left-0 bg-gradient-to-b from-stone-500 to-sky-500 text-white rounded-md">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-2 cursor-pointer capitalize py-4 text-2xl rounded-lg"
            >
              <Link onClick={() => setNav(!nav)} href={`/${link}-detail`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
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
        <div className="absolute right-4 mt-0 w-24 rounded-md">
          <div className="py-1">
            <button
              onClick={() => handleFlagClick('spain')}
              className="block w-full px-4 py-2 text-sm text-white flex items-center space-x-2 hover:bg-sky-500 md:rounded"
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
              className="block w-full px-4 py-2 text-sm text-white flex items-center space-x-2 hover:bg-sky-500 md:rounded"
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
              className="block w-full px-4 py-2 text-sm text-white flex items-center space-x-2 hover:bg-sky-500 md:rounded"
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
    </nav>
  )
}
