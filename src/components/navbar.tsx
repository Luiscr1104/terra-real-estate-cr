"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaHammer, FaMapMarkedAlt } from "react-icons/fa";
import Image from "next/image";


const links = [
  { name: "Propiedades", href: "/properties", icon: <FaMapMarkedAlt /> },
  { name: "Construcción", href: "/builds", icon: <FaHammer /> },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: <FaFacebook size={38} /> },
  { name: "Instagram", href: "https://facebook.com", icon: <FaInstagram size={40} /> },
  { name: "YouTube", href: "https://facebook.com", icon: <FaYoutube size={48} /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur shadow z-50">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto text-verdePrimario capitalize h-25">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Enlaces de Navegación */}
        <div className="flex items-center justify-center flex-grow">
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <div
                className={`text-xl flex mx-1.5 sm:mx-4 ${
                  pathname === link.href
                    ? "text-verdePrimario border-b-2 border-verdePrimario"
                    : "border-b-2 border-transparent hover:text-gray-800 hover:border-verdePrimario"
                }`}
              >
                {link.icon && <span className="mr-2 mt-1">{link.icon}</span>}
                {link.name}
              </div>
            </Link>
          ))}
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center">
          {socialLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              <div
                className={`flex mx-1.5 sm:mx-2 ${
                  pathname === link.href
                    ? "text-verdePrimario"
                    : "hover:text-gray-800"
                }`}
              >
                {link.icon && <span className="mr-2 mt-1">{link.icon}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
