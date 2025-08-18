"use client";
import React from "react";

export default function Contact() {
  return (
    <div className="contact-page bg-[#f0f4f8] h-screen w-full" style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#2d6cdf", marginBottom: "20px" }}>Contact Us</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px" }}>
        {/* Contact Information */}
        <div style={{ flex: "1 1 300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", background: "#f9f9f9" }}>
          <h2 style={{ color: "#333", marginBottom: "10px" }}>Get in Touch</h2>
          <p style={{ marginBottom: "10px" }}>
            <strong>Email:</strong> contact@crimechecker.com
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Location:</strong> 123 Main Street, Lahore, Pakistan
          </p>
        </div>

        {/* Contact Form */}
        <div style={{ flex: "1 1 300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", background: "#f9f9f9" }}>
          <h2 style={{ color: "#333", marginBottom: "10px" }}>Send Us a Message</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px" }}
              required
            />
            <textarea
              placeholder="Your Message"
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "14px", minHeight: "100px" }}
              required
            ></textarea>
            <button
              type="submit"
              style={{
                background: "#2d6cdf",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                border: "none",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 style={{ color: "#333", marginBottom: "20px" }}>Visit Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.123456789!2d74.358748!3d31.520370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190456789abcdef%3A0x123456789abcdef!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692268800000!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: "0", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}