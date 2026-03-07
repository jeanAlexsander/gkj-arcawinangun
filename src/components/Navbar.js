"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "Home", href: "/" },
    { name: "Tentang", href: "/tentang" },
    { name: "Jadwal Ibadah", href: "/jadwal-ibadah" },
    { name: "Pengumuman", href: "/pengumuman" },
    { name: "Pelayanan", href: "/pelayanan" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="bg-white shadow relative">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-gkj.jpg"
            alt="Logo GKJ Arcawinangun"
            width={45}
            height={45}
            className="object-contain"
          />
          <h1 className="text-xl font-bold text-gray-800">GKJ Arcawinangun</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          {menus.map((menu) => (
            <li key={menu.name} className="relative group">
              <Link
                href={menu.href}
                className={`transition-colors duration-300 ${
                  pathname === menu.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {menu.name}
              </Link>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                  pathname === menu.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-md px-6 space-y-4">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 border-b transition-colors duration-300 ${
                pathname === menu.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
