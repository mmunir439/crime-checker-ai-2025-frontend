"use client";
import React, { useState } from "react";
import axios from "@/utils/axios";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation"; // Correct import
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Correct usage

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(""); // Clear success message
    setErrorMessage(""); // Clear error message

    try {
      const response = await axios.post("/contact", formData);
      setSuccessMessage(response.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
      router.push("/"); // Redirect to home page
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Failed to send the message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact-page bg-gradient-to-r from-blue-500 to-green-500 min-h-screen p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">
          Contact Us
        </h1>
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> munir.webdev@gmail.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +92 3195803212
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> Muzaffargarh, Shahgarh, Pakistan
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            {successMessage && (
              <p className="text-green-600 text-center mb-4">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-red-600 text-center mb-4">{errorMessage}</p>
            )}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className={`py-3 px-6 rounded-lg shadow-lg text-white ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 transition duration-300"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10 w-full max-w-6xl">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Visit Us
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.123456789!2d74.358748!3d31.520370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190456789abcdef%3A0x123456789abcdef!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692268800000!5m2!1sen!2s"
            width="100%"
            height="400"
            className="rounded-lg shadow-lg"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}