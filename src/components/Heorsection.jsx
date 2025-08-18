"use client";
import React, { useState, useEffect } from "react";
import axios from "@/utils/axios";

export default function Hero() {
  const [criminaldata, setCriminaldata] = useState([]);

  async function getcriminalist() {
    try {
      const response = await axios.get("/criminals");
      console.log("Criminal Data:", response.data);
      setCriminaldata(response.data);
    } catch (error) {
      console.error("Error fetching criminals:", error);
    }
  }

  useEffect(() => {
    getcriminalist();
  }, []);

  return (
    <div
      className="hero-section bg-gradient-to-r from-blue-500 to-green-500 min-h-screen p-10"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <h1
        className="text-center text-white text-4xl font-bold mb-10"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Criminal List
      </h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        style={{ justifyContent: "center" }}
      >
        {criminaldata.length > 0 ? (
          criminaldata.map((criminal) => (
            <div
              key={criminal._id}
              className="criminal-card bg-white rounded-lg shadow-lg p-5 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src={criminal.photo}
                alt={criminal.name}
                className="rounded-full w-24 h-24 object-cover mb-4"
                style={{
                  border: "3px solid #4caf50",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
              <h2 className="text-lg font-bold text-gray-800">{criminal.name}</h2>
              <p className="text-sm text-gray-600">
                <strong>Crime Type:</strong> {criminal.crimeType}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Age:</strong> {criminal.age}
              </p>
              <p className="text-sm text-gray-600">
                <strong>CNIC:</strong> {criminal.cnic}
              </p>
            </div>
          ))
        ) : (
          // Placeholder card for empty data
          <div
            className="empty-card bg-gray-200 rounded-lg shadow-lg p-5 flex flex-col items-center justify-center"
            style={{
              height: "200px",
              textAlign: "center",
              animation: "pulse 1.5s infinite",
            }}
          >
            <p className="text-gray-500 text-lg">No criminal data available.</p>
          </div>
        )}
      </div>
    </div>
  );
}