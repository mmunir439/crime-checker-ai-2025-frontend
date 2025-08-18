"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "@/utils/axios";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cnic: "",
  });
  const [loading, setLoading] = useState(false); // State to track loading
  const [successMessage, setSuccessMessage] = useState(""); // State to track success message
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/user/getuser");
        console.log("User Data:", response.data[0]);
        setFormData({
          username: response.data[0]?.username || "",
          email: response.data[0]?.email || "",
          password: "", // Leave password empty initially
          cnic: response.data[0]?.cnic || "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the process starts
    try {
      const response = await axios.put("/user/updateuser", formData); // Use PUT for updating user data
      setSuccessMessage(response.data.message || "Profile updated successfully!"); // Set success message
      setTimeout(() => {
        setSuccessMessage(""); // Clear the message after 3 seconds
        router.push("/"); // Redirect to home page
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "Profile update failed!");
    } finally {
      setLoading(false); // Set loading to false when the process ends
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", background: "#f9f9f9", borderRadius: "8px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2d6cdf" }}>Edit Profile</h1>
      {successMessage && (
        <p style={{ textAlign: "center", color: "green", fontSize: "16px", marginBottom: "20px" }}>
          {successMessage}
        </p>
      )}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }} htmlFor="username">Username</label>
        <input style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }} type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

        <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }} htmlFor="email">Email</label>
        <input style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label style={{ fontSize: "16px", color: "#333", marginBottom: "5px" }} htmlFor="password">Password (Optional)</label>
        <input style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }} type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Leave blank to keep current password" />

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
          {loading ? "Updating..." : "Update"} {/* Show text based on loading state */}
        </button>
      </form>
    </div>
  );
}