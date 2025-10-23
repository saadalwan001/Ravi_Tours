import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import api from "@/utlis/axios.js";
import { useNavigate } from "react-router-dom";
import Nav from "@/Components/Admin/Admin_Nav.jsx";

const Admin_Gallery_Cards = () => {
  const [gallery, setGallery] = useState([]);
  const navigate = useNavigate();

  // Fetch gallery images
  const fetchGallery = async () => {
    try {
      const res = await api.get("/gallery");
      setGallery(res.data);
    } catch (err) {
      console.error("Error fetching gallery:", err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Delete gallery image
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      const token = localStorage.getItem("admin_token");
      await api.delete(`/gallery/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGallery(gallery.filter((img) => img.id !== id));
    } catch (err) {
      console.error("Error deleting image:", err);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <Nav className="mb-[50px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top bar with Add button */}
        <div className="flex justify-between items-center mt-[50px] mb-[30px]">
          <h2 className="text-2xl font-bold text-gray-800">Manage Gallery</h2>
          <button
            onClick={() => navigate("/admin-galleryupload")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Add New Gallery Image
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallery.map((img) => (
            <div
              key={img.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 min-h-[300px] relative"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden flex justify-center items-center mt-[20px]">
                <div className="w-[300px] h-[200px] transition-transform duration-500 hover:scale-105">
                  <img
                    src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/storage/${img.image_path}`}
                    alt={img.title}
                    className="w-full h-full object-cover hover:scale-105 duration-300 transition-transform ease-in-out"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-left flex flex-col justify-between flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[55px]">
                  {img.title}
                </h3>

                <p className="text-gray-600 text-justify leading-relaxed mb-4">
                  {img.description?.substring(0, 100)}...
                </p>

                {/* Actions */}
                <div className="flex justify-between">
                  <button
                    onClick={() => navigate(`/admin-editgallery/${img.id}`)}
                    className="flex items-center px-4 py-2 bg-[#1A5775] text-white rounded-lg hover:bg-[#024360] transition"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Admin_Gallery_Cards;
