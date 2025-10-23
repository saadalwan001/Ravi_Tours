import React, { useState } from "react";
import Navbar from "@/Components/Admin/Admin_Nav.jsx";
import { useNavigate } from "react-router-dom";
import api from "@/utlis/axios.js";
import { X } from "lucide-react";

export default function GalleryUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

  const handleImageChange = (file) => {
    setImage(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (!title || !image) {
      setMessage("Title and image are required!");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const token = localStorage.getItem("admin_token");
      await api.post("/gallery", formData, {
        headers: { 
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        },
      });

      setMessage("Image uploaded successfully!");
      setTitle("");
      setDescription("");
      removeImage();
      navigate("/admin-gallerycards");
    } catch (error) {
      console.error(error);
      setMessage("Failed to upload image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-extrabold text-center mb-10">Upload Gallery Image</h2>

        {message && (
          <div className={`mb-6 text-center font-medium ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter image title"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Enter description (optional)"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Image</label>
            <div className="flex items-center gap-4">
              {imagePreview ? (
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="w-40 h-24 object-cover rounded-md" />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
                  Upload Image
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageChange(e.target.files[0])} />
                </label>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="text-right">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#024360] text-white px-6 py-3 rounded-lg hover:text-[#75798B] shadow-md transition duration-200 font-medium"
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
