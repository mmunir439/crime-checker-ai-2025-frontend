"use client";
import { RiCriminalFill } from "react-icons/ri";
import { FaGithub, FaLinkedinIn , FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2 text-xl font-bold">
          <RiCriminalFill size={28} />
          <span>CrimeChecker</span>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 items-center">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link href="/register" className="hover:text-white">Register</Link>
          <Link href="/team" className="hover:text-white">My Team</Link>

          {/* <Link href="/privacy" className="hover:text-white">Privacy Policy</Link> */}
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
        {/* Contact & Social */}
        <div className="flex space-x-4 items-center">
    <a href="mailto:munir.webdev@gmail.com" className="hover:text-white" aria-label="Email">
  <FaEnvelope size={22} />
</a>
          <Link href="https://github.com/mmunir439" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="GitHub">
            <FaGithub size={22} />
          </Link>
          <Link href="https://x.com/Muhamad_munir76" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Twitter">
            <FaTwitter size={22} />
          </Link>
          <Link href="https://www.linkedin.com/in/munirdev/" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn">
            <FaLinkedinIn  size={22} />
          </Link>
        </div>
      </div>
      {/* Tagline/Description */}
      <div className="text-center text-gray-400 text-sm mt-6">
        VerifyCrimes helps you check and verify the crime status of individuals quickly and securely.
      </div>
      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-2">
        &copy; {new Date().getFullYear()} VerifyCrimes. All rights reserved.
      </div>
    </footer>
  );
}