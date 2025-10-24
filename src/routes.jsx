import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";

//Importing Pages
import Homepage from "./Homepage";
import AboutUs from "./AboutUS/AboutUs.jsx";
import Destination from "./Destination/Destination.jsx";
import Packages from "@/Packages/Packages.jsx";
import Packages_Details from "@/Packages/PackageDetails.jsx";
import Location from "@/Destination/Location.jsx";
import Contact from "@/Contact/Contact.jsx";
import Gallery from "@/Gallery/Gallery.jsx";

//Admin Related Imports

import Login from "@/Admin/Login.jsx";
import Dashboard from "@/Admin/Dashboard.jsx";
import A_package from "@/Admin/Admin_Tour_Package.jsx";
import Admin_Tour_Packge_Card from "@/Admin/Admin_Tour_Packge_Card.jsx";
import Admin_Edit_Tour_Package from "@/Admin/Admin_Edit_Tour_Package.jsx";
import Admin_AddAttraction from "./Admin/Admin_AttractionAdd_Page.jsx";
import Admin_Attraction_Card from "./Admin/Admin_Attraction_Cards.jsx";
import Admin_EditAttraction from "./Admin/Admin_Attraction_Edit.jsx";
import Admin_Contact from "@/Admin/Admin_Contact_Page.jsx";
import Admin_Profile from "@/Admin/Admin_Profile_Page.jsx";
import Admin_Gallery_Upload from "@/Admin/Admin_Gallery_Upload.jsx";
import Admin_Gallery_Cards from "./Admin/Admin_Gallery_Cards.jsx";
import Admin_Gallery_Edit from "./Admin/Admin_Gallery_Edit.jsx";

export default function routes() {
  return (
    <>
      <Routes>
        {/* Admin Related Routes */}
        {/* Login Route (accessible only if not logged in) */}
        <Route
          path="/admin-login"
          element={
            !localStorage.getItem("admin_token") ? <Login /> : <Dashboard />
          }
        />
        {/*Protected Route Section*/}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Package Management (cards) */}
        <Route
          path="/admin-packcards"
          element={
            <ProtectedRoute>
              <Admin_Tour_Packge_Card />
            </ProtectedRoute>
          }
        />
        {/* Package Edit (cards) */}
        <Route
          path="/admin-editcards/:id"
          element={
            <ProtectedRoute>
              <Admin_Edit_Tour_Package />
            </ProtectedRoute>
          }
        />
        {/*Attraction & Experienc adding page */}
        <Route
          path="/admin-attraction"
          element={
            <ProtectedRoute>
              <Admin_AddAttraction />
            </ProtectedRoute>
          }
        />
        {/*Attraction & Experienc cards */}
        <Route
          path="/admin-attraction/cards"
          element={
            <ProtectedRoute>
              <Admin_Attraction_Card />
            </ProtectedRoute>
          }
        />
        {/* Package Edit Attraction Cards */}
        <Route
          path="/admin-editattraction/:id"
          element={
            <ProtectedRoute>
              <Admin_EditAttraction />
            </ProtectedRoute>
          }
        />
        {/*Contact Page */}
        <Route
          path="/admin-contact"
          element={
            <ProtectedRoute>
              <Admin_Contact />
            </ProtectedRoute>
          }
        />
        {/*Profile Page */}
        <Route
          path="/admin-profile"
          element={
            <ProtectedRoute>
              <Admin_Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-packages"
          element={
            <ProtectedRoute>
              <A_package />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-galleryupload"
          element={
            <ProtectedRoute>
              <Admin_Gallery_Upload />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-gallerycards"
          element={
            <ProtectedRoute>
              <Admin_Gallery_Cards/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-gallerycard-edit/:id"
          element={
            <ProtectedRoute>
              <Admin_Gallery_Edit/>
            </ProtectedRoute>
          }
        />


        <Route path="*" element={<Homepage />} />
        // Or a NotFound component
        {/*admin realted Routes Ending points */}
        {/* Open Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/All_Packages" element={<Packages />} />
        <Route path="/Packages/:id" element={<Packages_Details />} />
        <Route path="/Location/:id" element={<Location />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}
