"use client";
import React, { useState } from "react";
import axios from "@/utils/axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Verify() {
  const [cnic, setCnic] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const verifyCrime = async () => {
    try {
      setError(""); // Clear previous errors
      setResult(null); // Clear previous results

      if (!cnic) {
        setError("Please enter a CNIC.");
        return;
      }

      const response = await axios.post("/criminals/verifyCriminalByCNIC", { cnic });
      setResult(response.data); // Set the result from the backend
      cnic(""); // Clear the input field after successful verification
    } catch (error) {
      setError(error.response?.data?.error || "Failed to verify criminal.");
    }
  };

  return (
    <div>
        <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Verify Criminal</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter CNIC"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          onClick={verifyCrime}
          className="w-full p-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Verify
        </button>
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        {result && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Criminal Found:</h2>
            <p><strong>Name:</strong> {result.criminal.name}</p>
            <p><strong>CNIC:</strong> {result.criminal.cnic}</p>
            <p><strong>Crime Type:</strong> {result.criminal.crimeType}</p>
            <p><strong>Age:</strong> {result.criminal.age}</p>
            <img
              src={result.criminal.photo}
              alt={result.criminal.name}
              className="w-32 h-32 rounded-lg mt-4"
            />
          </div>
        )}
      </div>
    </div>
      <Footer />
      </div>
  );
}