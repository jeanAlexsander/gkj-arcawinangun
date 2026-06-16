"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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
    <nav className="bg-white dark:bg-zinc-900 shadow relative border-b dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-gkj.jpg"
            alt="Logo GKJ Arcawinangun"
            width={45}
            height={45}
            className="object-contain rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-800 dark:text-zinc-100">
            GKJ Arcawinangun
          </h1>
        </div>

        {/* Desktop Menu & Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 font-medium">
            {menus.map((menu) => (
              <li key={menu.name} className="relative group">
                {/* 4. Tambahkan dark:text-zinc-300 dark:hover:text-blue-400 */}
                <Link
                  href={menu.href}
                  className={`transition-colors duration-300 ${
                    pathname === menu.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {menu.name}
                </Link>

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                    pathname === menu.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* 5. Tombol Dark Mode untuk Layar Desktop */}
          <div className="border-l pl-4 dark:border-zinc-700">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Button */}
        {/* 6. Tambahkan dark:text-zinc-100 */}
        <button
          className="md:hidden text-gray-800 dark:text-zinc-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-112.5 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        {/* 7. Sesuaikan background menu mobile dengan dark:bg-zinc-900 */}
        <div className="bg-white dark:bg-zinc-900 shadow-md px-6 space-y-4 pb-4">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 border-b dark:border-zinc-800 transition-colors duration-300 ${
                pathname === menu.href
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-zinc-300"
              }`}
            >
              {menu.name}
            </Link>
          ))}

          {/* 9. Tombol Dark Mode untuk Tampilan Mobile */}
          <div className="pt-2 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600 dark:text-zinc-400">
              Pilih Tema:
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
