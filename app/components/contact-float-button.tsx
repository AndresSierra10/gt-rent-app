'use client'

import React from 'react';
import { MdModeStandby } from 'react-icons/md';
import Image from 'next/image'; 

export default function Contact() {

  const menu = [
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <nav className="ml-0 fixed z-10">
      <ul className="list-disc flex flex-col gap-5 fixed right-0 top-50 bottom-40 justify-center sm:m-10 m-3 ">
        {menu.map((x, index) => (
          <a
            href={x.url}
            key={index}
            className="flex items-center flex-row-reverse group "
          >
            <Image
                src="/contact2.svg" // Usar un formato relativo para la ruta de la imagen
                width={72}
                height={72}
                className="sm:text-4 xl text-2xl text-primary group-hover:text-accent  transition-all ease-in-out duration-700  sm:ml-5  flex-shrink-0"
                alt="contact-icon"
            />
            <p
              className={`opacity-0 group-hover:opacity-100 transition duration-700  text-2 mr-3 text-white font-bold uppercase`}
            >
              {x.name}
            </p>
          </a>
        ))}
      </ul>
    </nav>
  )
}
