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
    <div
      className="user-dashboard bg-[#e6f3c2] min-h-screen w-full"
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2d6cdf",
          marginBottom: "20px",
          fontSize: "2.5rem",
        }}
      >
        User Dashboard
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {userData.length > 0 ? (
          userData.map((user) => (
            <div
              key={user.id}
              style={{
                flex: "1 1 300px",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: "#f9f9f9",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2
                style={{
                  color: "#333",
                  marginBottom: "10px",
                  fontSize: "1.5rem",
                }}
              >
                Welcome, {user.username}
              </h2>
              <Link href={`/edit-profile`}>
                Edit profile
                <FaPen style={{ color: "blue", fontSize: "20px", width: "20px", height: "20px" }} />
              </Link>
              <Link href={`/delete-profile`}>
                 delete profile
                <MdDelete style={{ color: "red", fontSize: "20px", width: "20px", height: "20px" }} />
              </Link>
              <p style={{ marginBottom: "10px", fontSize: "1rem" }}>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              color: "#333",
              fontSize: "1.2rem",
              marginTop: "20px",
            }}
          >
            Loading user data...
          </p>
        )}
      </div>
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "#f9f9f9",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
            fontSize: "2rem",
          }}
        >
          Criminal Records
        </h2>
        {crimeData.length > 0 ? (
          crimeData.map((crime) => (
            <div
              key={crime._id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                gap: "20px",
              }}
            >
              <img
                src={crime.photo}
                alt={crime.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <div>
                <h3 style={{ color: "#333", fontSize: "1.5rem" }}>
                  Crime ID: {crime._id}
                </h3>
                <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                  <strong>Crime Type:</strong> {crime.crimeType}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "#333", fontSize: "1.5rem" }}>MY CrimeStatus</h3>
            <p style={{ fontSize: "1rem", color: "#666" }}>
              No Crime Data Available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}