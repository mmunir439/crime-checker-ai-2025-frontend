"use client";
import React, { useState, useEffect } from "react";
import axios from "@/utils/axios";

export default function Admin() {
  const [criminaldata, setCriminaldata] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    crimeType: "",
    age: "",
    photo: null,
  });
  const [message, setMessage] = useState("");
  const [editMode, setEditMode] = useState(false); // State to toggle edit mode
  const [editCnic, setEditCnic] = useState(""); // Store CNIC for editing

  // Fetch criminals
  async function getCriminals() {
    try {
      const response = await axios.get("/criminals");
      console.log("Criminal Data:", response.data);
      setCriminaldata(response.data);
    } catch (error) {
      console.error("Error fetching criminals:", error);
    }
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  // Handle form submission for adding or updating
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("cnic", formData.cnic);
    formDataToSend.append("crimeType", formData.crimeType);
    formDataToSend.append("age", formData.age);
    if (formData.photo) {
      formDataToSend.append("photo", formData.photo);
    }

    try {
      if (editMode) {
        // Update criminal
        const response = await axios.put(`/criminals/updateCriminal/${editCnic}`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMessage("Criminal updated successfully!");
      } else {
        // Add criminal
        const response = await axios.post("/criminals/addcriminaldata", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMessage("Criminal added successfully!");
      }
      setShowForm(false); // Close the form
      setEditMode(false); // Reset edit mode
      getCriminals(); // Refresh the list
    } catch (error) {
      console.error("Error adding/updating criminal:", error);
      setMessage("Failed to add/update criminal.");
    }
  };

// Example: Remove unused response
const handleDelete = async (cnic) => {
  try {
    await axios.delete(`/criminals/deleteCriminalByCNIC/${cnic}`);
    setMessage("Criminal deleted successfully!");
    getCriminals(); // Refresh the list
  } catch (error) {
    console.error("Error deleting criminal:", error);
    setMessage("Failed to delete criminal.");
  }
};
  // Handle edit criminal
  const handleEdit = (criminal) => {
    setEditMode(true);
    setEditCnic(criminal.cnic);
    setFormData({
      name: criminal.name,
      cnic: criminal.cnic,
      crimeType: criminal.crimeType,
      age: criminal.age,
      photo: null, // Reset photo for editing
    });
    setShowForm(true); // Show the form
  };

  useEffect(() => {
    getCriminals();
  }, []);

  return (
    <div className="admin-dashboard bg-gradient-to-r from-blue-500 to-green-500 min-h-screen p-10">
      <h1
        className="text-center text-white text-4xl font-bold mb-10"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Admin Dashboard
      </h1>
      <button
        onClick={() => {
          setShowForm(!showForm);
          setEditMode(false); // Reset edit mode
          setFormData({
            name: "",
            cnic: "",
            crimeType: "",
            age: "",
            photo: null,
          }); // Reset form data
        }}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mb-6"
      >
        {showForm ? "Close Form" : editMode ? "Edit Criminal" : "Add Criminal"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg mb-10"
          style={{ maxWidth: "600px", margin: "auto" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="cnic"
            placeholder="CNIC"
            value={formData.cnic}
            onChange={handleChange}
            required
            disabled={editMode} // Disable CNIC input in edit mode
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="crimeType"
            placeholder="Crime Type"
            value={formData.crimeType}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            required={!editMode} // Photo is required only in add mode
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            {editMode ? "Update Criminal" : "Submit"}
          </button>
        </form>
      )}

      {message && <p className="text-center text-white mb-6">{message}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {criminaldata.map((criminal) => (
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
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => handleEdit(criminal)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(criminal.cnic)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}