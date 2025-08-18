"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import axios from "@/utils/axios"; // Import the axios instance

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // Set loading to true when the process starts
  try {
    const response = await axios.post("/user/loginuser", formData);
    if (response.data.token) {
      // Save token to localStorage or handle it as needed
      localStorage.setItem("token", response.data.token);

      // Check the user's role and redirect accordingly
      const userRole = response.data.user.role; // Adjust this based on the actual structure
        console.log(userRole); // Log the role


      if (userRole === "admin") {
        router.push("/admindashboard"); // Redirect to admin dashboard
      } else if (userRole === "user") {
        router.push("/userdashboard"); // Redirect to user dashboard
      } else {
        setMessage("Invalid role. Please contact support.");
      }
    }
  } catch (error) {
    setMessage(error.response?.data?.message || "Login failed!");
  } finally {
    setLoading(false); // Reset loading state after the process ends
  }
};

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", background: "#f9f9f9", borderRadius: "8px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2d6cdf" }}>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }} htmlFor="email">Email</label>
        <input
          style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }} htmlFor="password">Password</label>
        <input
          style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          style={{
            background: loading ? "#ccc" : "#2d6cdf", // Change color when loading
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer", // Disable cursor when loading
            border: "none",
          }}
          type="submit"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Logging in..." : "Login"} {/* Show text based on loading state */}
        </button>
        <p>If you don't have an account <Link href="/register">Register</Link></p>
      </form>
      {message && <p style={{ textAlign: "center", color: "#333", marginTop: "15px" }}>{message}</p>}
    </div>
  );
}