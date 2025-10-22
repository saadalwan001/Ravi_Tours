import React, { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import Button from "@/Components/ui/Button.jsx";
import Footer from "@/Components/Client/Footer.jsx";
import api from "@/utlis/axios.js"; // your axios instance

function ContactUs() {
  const [contact, setContact] = useState({
    address: "",
    phone1: "",
    whatsapp: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch contact info from backend
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await api.get("/company-contact"); // adjust endpoint if needed
        setContact({
          address: res.data.address,
          phone1: res.data.phone1,
          whatsapp: res.data.whatsapp,
          email: res.data.email,
        });
      } catch (err) {
        console.error("Failed to fetch contact info:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  if (loading)
    return <div className="p-6 text-center">Loading contact info...</div>;

  return (
    <>
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ===== Left Column - Contact Info & Socials ===== */}
          <div className="space-y-8">
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl shadow-md p-6 text-center group transition">
                <Phone
                  size={40}
                  className="mx-auto mb-3 text-gray-500 group-hover:text-[#155DFC] transition-colors"
                />
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600 mt-1">{contact.phone1}</p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl shadow-md p-6 text-center group transition">
                <MessageCircle
                  size={40}
                  className="mx-auto mb-3 text-gray-500 group-hover:text-[#155DFC] transition-colors"
                />
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-gray-600 mt-1">{contact.whatsapp}</p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl shadow-md p-6 text-center group transition">
                <Mail
                  size={40}
                  className="mx-auto mb-3 text-gray-500 group-hover:text-[#155DFC] transition-colors"
                />
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600 mt-1">{contact.email}</p>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl shadow-md p-6 text-center group transition">
                <MapPin
                  size={40}
                  className="mx-auto mb-3 text-gray-500 group-hover:text-[#155DFC] transition-colors"
                />
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600 mt-1">{contact.address}</p>
              </div>
            </div>

            {/* Optional Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 lg:h-[400px]">
              <iframe
                title="Location Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63314.25373102983!2d79.80828079651827!3d6.921837094133746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594ed3a3ed07%3A0x8c5df801f3a6f8e6!2sColombo!5e0!3m2!1sen!2slk!4v1695921429297!5m2!1sen!2slk"
              ></iframe>
            </div>
          </div>

          {/* ===== Right Column - Form ===== */}
          <div className="p-6 sm:p-8 rounded-lg bg-white shadow-lg">
            <h2 className="text-2xl lg:text-[40px] font-bold mb-6">
              Contact Us By Sending A Message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    <span className="text-gray-400">*</span> Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    className="mt-1 block w-full h-[60px] bg-[#E0F4FF] rounded-md p-2 text-[#656566] border-none focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    <span className="text-gray-400">*</span> Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    className="mt-1 block w-full h-[60px] bg-[#E0F4FF] rounded-md p-2 text-[#656566] border-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile No or Whatsapp No:
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Your Mobile Number"
                    className="mt-1 block w-full h-[60px] bg-[#E0F4FF] rounded-md p-2 text-[#656566] border-none focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    <span className="text-gray-400">*</span> Country
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Country"
                    required
                    className="mt-1 block w-full h-[60px] bg-[#E0F4FF] rounded-md p-2 text-[#656566] border-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Arrival Date:
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Departure Date:
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Enter Your Message"
                  className="mt-1 block w-full bg-[#E0F4FF] rounded-md p-4 text-[#656566] border-none focus:outline-none"
                ></textarea>
              </div>

              <p className="text-sm text-gray-500">Required Fields *</p>

              <Button text="Send Email" />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
