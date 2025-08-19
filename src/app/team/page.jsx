"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function About() {
  const profiles = [
    {
      name: "Muhammad Munir",
      role: "Backend and APIs",
      expertise: "MERN Stack",
      bio: "BS Computer Science Student in 4th year.",
      image: "/images/munir.jpeg",
    },
    {
      name: "Muhammad Kashif",
      role: "Frontend Developer",
      expertise: "Html,css,js,react",
      bio: "BS Infromation Technology Student in 3rd year.",
      image: "/images/kashif.jpeg",
    },
    {
      name: "Muhammad Iftakhar",
      role: "Html,css,js",
      expertise: "Html Developer",
      bio: "BS Information Technology Student in 4th year.",
      image: "/images/iftakhar.jpeg",
    },
    {
      name: "Muhammad Mudasir",
      role: "html,css,js developer",
      expertise: "Html,Css,basic in js",
      bio: "BS Information Technology Student in 4th year.",
      image: "/images/mudasir.jpeg",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen p-10">
      <Navbar />
      <h1 className="text-center text-white text-4xl font-bold mb-10">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="h-32 w-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
              src={profile.image}
              alt={profile.name}
            />
            <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
              {profile.name}
            </h2>
            <p className="text-gray-600 text-center">
              <span className="font-semibold">Role: </span>
              {profile.role}
            </p>
            <p className="text-gray-600 text-center">
              <span className="font-semibold">Expertise: </span>
              {profile.expertise}
            </p>
            <p className="text-gray-600 text-center">
              <span className="font-semibold">Bio: </span>
              {profile.bio}
            </p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}