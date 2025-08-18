"use client";
import React from "react";

export default function About() {
  const profiles = [
    {
      name: "Muhammad Munir",
      role: "Backend and APIs",
      expertise: "MERN Stack",
      bio: "BS Computer Science Student in 4th year.",
      image: "/images/munir.png",
    },
    {
      name: "Muhammad Kashif",
      role: "Frontend Developer",
      expertise: "Html,css,js,react",
      bio: "BS Computer Science Student in 4th year.",
      image: "/images/munir.png",
    },
    {
      name: "Muhammad Iftakhar",
      role: "Html,css,js",
      expertise: "Html Developer",
      bio: "BS Computer Science Student in 4th year.",
      image: "/images/munir.png",
    },
    {
      name: "Muhammad Mudasir",
      role: "Html developer",
      expertise: "Html,Css",
      bio: "BS Computer Science Student in 4th year.",
      image: "/images/munir.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center bg-[#e6f3c2] min-h-screen p-4">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 m-4 w-80 flex flex-col items-center"
        >
          <img
            className="h-32 w-32 rounded-full mb-4"
            src={profile.image}
            alt={profile.name}
          />
          <h2 className="text-xl font-bold mb-2">{profile.name}</h2>
          <p className="text-gray-600">
            <span className="font-semibold">Role: </span>
            {profile.role}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Expertise: </span>
            {profile.expertise}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Bio: </span>
            {profile.bio}
          </p>
        </div>
      ))}
    </div>
  );
}