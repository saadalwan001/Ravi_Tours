import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "@/utlis/axios.js";
import Admin_Nav from "@/Components/Admin/Admin_Nav.jsx";
import { X } from "lucide-react";

export default function Admin_Gallery_Edit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // ✅ Fetch gallery image data
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await api.get(`/gallery/${id}`);
        const data = res.data;
        setTitle(data.title || "");
        setDescription(data.description || "");
        setImagePreview(
          data.image_path
            ? `${import.meta.env.VITE_API_URL.replace("/api", "")}/storage/${data.image_path}`
            : null
        );
      } catch (err) {
        console.error("Error fetching gallery data:", err);
        alert("Failed to fetch gallery details.");
      }
    };

    fetchGallery();
  }, [id]);

  // ✅ Handle new image selection
  const handleImageChange = (file) => {
    setImage(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  // ✅ Remove current image
  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  // ✅ Submit update form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);
    formData.append("_method", "PUT");

    try {
      const token = localStorage.getItem("admin_token");
      await api.post(`/gallery/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Gallery image updated successfully!");
      navigate("/admin-gallerycards");
    } catch (err) {
      console.error(err.response || err);
      alert(err.response?.data?.message || "Error updating gallery image!");
    }
  };

  return (
    <>
      <Admin_Nav />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-extrabold text-center mb-10">
          Edit Gallery Image
        </h2>

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
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Image</label>
            <div className="flex items-center gap-4">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-40 h-24 object-cover rounded-md"
                  />
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
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e.target.files[0])}
                  />
                </label>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#024360] text-white px-6 py-3 rounded-lg hover:text-[#75798B] shadow-md transition duration-200 font-medium"
            >
              Update Gallery
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
