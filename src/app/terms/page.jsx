"use client";
import React,{useState,useEffect} from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Terms and Conditions
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to CrimeChecker
        </h2>
        <p className="text-gray-600 mb-4">
          These terms and conditions outline the rules and regulations for the
          use of CrimeChecker's website and services. By accessing this
          website, we assume you accept these terms and conditions. Do not
          continue to use CrimeChecker if you do not agree to all the terms and
          conditions stated on this page.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          License to Use
        </h3>
        <p className="text-gray-600 mb-4">
          Unless otherwise stated, CrimeChecker and/or its licensors own the
          intellectual property rights for all material on CrimeChecker. All
          intellectual property rights are reserved. You may access this from
          CrimeChecker for your own personal use subjected to restrictions set
          in these terms and conditions.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          User Responsibilities
        </h3>
        <p className="text-gray-600 mb-4">
          Users are responsible for ensuring that their use of the website
          complies with all applicable laws and regulations. Any misuse of the
          website or its services may result in termination of access.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Changes to Terms
        </h3>
        <p className="text-gray-600 mb-4">
          CrimeChecker reserves the right to revise these terms and conditions
          at any time. By using this website, you are expected to review these
          terms on a regular basis.
        </p>
        <p className="text-gray-600 text-center mt-6">
          If you have any questions about these terms, please contact us at{" "}
          <span className="text-blue-600 font-bold"><a href="/contact">Please Contact us</a></span>.
        </p>
      </div>
    </div>
  );
}