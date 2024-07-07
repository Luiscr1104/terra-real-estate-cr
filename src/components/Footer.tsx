import Image from "next/image";

import React from "react";
import { socialLinks } from "./socialLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <Image
              className="w-auto h-40"
              src="/logotipo.png"
              alt=""
              width={100}
              height={100}
              quality={100}
            />
          </a>

          <p className="max-w-md mx-auto text-gray-500">
            Terra Real Estate ofrece las mejores propiedades y servicios de construcción en la zona de La Fortuna de San Carlos.
          </p>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="w-full px-5 py-2 text-xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-verdePrimario rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Contáctanos
            </button>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2023. All Rights Reserved.
          </p>

          {/* Redes Sociales */}
          <div className="flex items-center justify-center text-verdePrimario">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`flex mx-1.5 sm:mx-2 hover:text-green-600`}>
                  {link.icon && <span className="mr-2">{link.icon}</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
