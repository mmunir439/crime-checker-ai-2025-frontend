"use client";
import React, { useState, useEffect } from "react";
import axios from "@/utils/axios";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Link from "next/link";

export default function UserDashboard() {
  const [userData, setUserData] = useState([]);
  const [crimeData, setCrimeData] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get("/user/getuser");
      console.log("User Data:", response.data);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCrime() {
    try {
      const response = await axios.get("/criminals/getCriminalByCNIC");
      console.log("Crime Data:", response.data);
      setCrimeData([response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
    getCrime();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        User Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userData.length > 0 ? (
          userData.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Welcome, {user.username}
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Email:</strong> {user.email}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/edit-profile`}
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  Edit Profile <FaPen />
                </Link>
                <Link
                  href={`/delete-profile`}
                  className="text-red-600 hover:underline flex items-center gap-2"
                >
                  Delete Profile <MdDelete />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white text-lg">Loading user data...</p>
        )}
      </div>

      <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Criminal Records
        </h2>
        {crimeData.length > 0 ? (
          crimeData.map((crime) => (
            <div
              key={crime._id}
              className="flex items-center gap-6 mb-6 bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <img
                src={crime.photo}
                alt={crime.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Crime ID: {crime._id}
                </h3>
                <p className="text-gray-600">
                  <strong>Crime Type:</strong> {crime.crimeType}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800">My Crime Status</h3>
            <p className="text-gray-600">No Crime Data Available</p>
          </div>
        )}
      </div>
    </div>
  );
}