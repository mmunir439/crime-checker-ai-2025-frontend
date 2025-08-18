"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "@/utils/axios"; // Import the axios instance
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cnic: "",
  });
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
      const response = await axios.post("/user/registeruser", formData); // Use axios for the POST request
      alert(response.data.message || "Registration successful!");
      router.push("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false); // Set loading to false when the process ends
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", background: "#f9f9f9", borderRadius: "8px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2d6cdf" }}>Register</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }} htmlFor="username">Username</label>
        <input style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }} type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

        <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }} htmlFor="email">Email</label>
        <input style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }} htmlFor="password">Password</label>
        <input style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }} type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }} htmlFor="cnic">CNIC</label>
        <input style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }} type="text" id="cnic" name="cnic" value={formData.cnic} onChange={handleChange} required />

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
          {loading ? "Registering..." : "Register"} {/* Show text based on loading state */}
        </button>
        <p>if you don't have account <Link href="/login">Login</Link></p>
      </form>
    </div>
  );
}