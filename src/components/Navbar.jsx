"use client";
import { RiCriminalFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-2 pl-7">
        <Link className="text-3xl flex" href="/">
          <RiCriminalFill /> <span>CrimeCheckr</span>
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 pr-[30px]">
        <Link href="/">Home</Link>
        <Link href="/verifycrime">VerifiCrime</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/register">Register</Link>
      </div>
      {/* Hamburger Icon */}
      <div className="md:hidden pr-7">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-9 right-0 p-[30px] bg-gray-900 rounded shadow-lg flex flex-col items-start p-4 space-y-2 md:hidden z-50">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/verifycrime" onClick={() => setMenuOpen(false)}>VerifiCrime</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/register" onClick={() => setMenuOpen(false)}>Register</Link>
        </div>
      )}
    </nav>
  );
}