"use client";
import React, { useState } from "react";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export default function Contact() {
  const [showDialog, setShowDialog] = useState(false); // State to control dialog visibility
  const [loading, setLoading] = useState(false); // State to track loading
  const [message, setMessage] = useState(""); // State to track success or error message
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true); // Set loading to true
    try {
      const response = await axios.delete("/user/deleteuser");
      setMessage(response.data.message || "User deleted successfully!");
      setTimeout(() => {
        router.push("/"); // Redirect to home page after deletion
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.error || "Failed to delete user.");
    } finally {
      setLoading(false); // Set loading to false
      setShowDialog(false); // Close the dialog
    }
  };

  return (
       <div className="contact-page bg-[#e6f3c2] h-screen w-full" style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#2d6cdf", marginBottom: "20px" }}>Your Delete page</h1>
      <p className="text-center text-lg text-gray-700 underline">
  <Link href="/userdashboard">Go back to User Dashboard</Link>
  <span style={{ marginLeft: "5px", verticalAlign: "middle", color: "#2d6cdf" }}>
  </span>
</p>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={() => setShowDialog(true)} // Show the dialog
          style={{
            background: "#ff4d4d",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Delete User
        </button>
      </div>

      {/* Dialog Box */}
      {showDialog && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            width: "300px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#333", marginBottom: "20px" }}>Are you sure?</h2>
          <p style={{ marginBottom: "20px", fontSize: "14px", color: "#666" }}>
            Do you really want to delete your account? This action cannot be undone.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
            <button
              onClick={handleDelete}
              style={{
                background: "#ff4d4d",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "14px",
                cursor: "pointer",
                border: "none",
                flex: "1",
              }}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Deleting..." : "Yes, Delete"}
            </button>
            <button
              onClick={() => setShowDialog(false)} // Close the dialog
              style={{
                background: "#ccc",
                color: "#333",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "14px",
                cursor: "pointer",
                border: "none",
                flex: "1",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Success/Error Message */}
      {message && (
        <p style={{ textAlign: "center", color: message.includes("successfully") ? "green" : "red", fontSize: "16px", marginTop: "20px" }}>
          {message}
        </p>
      )}
   </div>
  );
}