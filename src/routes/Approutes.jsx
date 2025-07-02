import { Route, Routes } from "react-router-dom";

import CSAHome from "../pages/CSAHomes";
import CSAPage from "../pages/CSAHomeFull";
import Checkout from "../Component/Checkout";
import Cloudinary3DViewer from "../Component/3dView";
import Dashboard from "../Component/Dashboard";
import EducationSection from "../Component/Educationsection";
import FSubmitted from "../Component/Feedbacksubmitted";
import FarmSubscriptionPage from "../pages/FarmSubscriptionPage";
import Feedback from "../Component/feedback";
import Footer from "../Component/Footer";
import GreenProductDetails from "../pages/GreenProductDetails";
import Header from "../Component/Header";
import Headergreen from "../Component/Headergreen";
import Home from "../Component/Home";
import Homegreen from "../Component/Homegreen";
import Login from "../Component/Login";
import NavBar from "../Component/navbar";
import NavBarg from "../Component/navbargreen";
import Orders from "../Component/Orders";
import ProductDetails from "../Component/ProductDetails";
import ProductDetails1 from "../Component/ProductDetails1";
import React from 'react';
import RecipesPage from "../pages/RecipesPage";
import SellerSection from "../Component/SellerSection";
import Submitted from "../Component/Submitted";
import SustainabilityReportsSection from "../Component/Sustainability";
import Thanks from "../Component/thanks";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/feedbacksubmitted" element={[<Headergreen />, <NavBarg />, <FSubmitted />]} />
            <Route path="/feedback" element={[<Headergreen />, <NavBarg />, <Feedback />, <Footer />]} />
            <Route path="/submitted" element={[<Headergreen />, <Submitted />]} />
            <Route path="/seller" element={[<Headergreen />, <NavBarg />, <SellerSection />, <Footer />]} />
            <Route path="/thanks" element={[<Header />, <Thanks />]} />
            <Route path="/orders" element={[<Header />, <Orders />, <Footer />]} />
            <Route path="/sustainability" element={[<Headergreen />, <NavBarg />, <SustainabilityReportsSection />, <Footer />]} />
            <Route path="/education" element={[<Headergreen />, <NavBarg />, <EducationSection />, <Footer />]} />
            <Route path="/green" element={[<Headergreen />, <NavBarg />, <Homegreen />, <Footer />]} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={[<Header />, <Checkout />, <Footer />]} />
            <Route path="/" element={[<Header />, <NavBar />, <Home />, <Footer />]} />
            <Route path="/dashboard" element={[<Header />, <NavBarg />, <Dashboard />]} />
            <Route path="/product" element={[<Headergreen />, <NavBarg />, <ProductDetails />, <Footer />]} />
            <Route path="/product1" element={[<Headergreen />, <NavBarg />, <ProductDetails1 />, <Footer />]} />
            <Route path="/green-product/:productId" element={[<Headergreen />, <NavBarg />, <GreenProductDetails />, <Footer />]} />
            <Route path="/consumersupportedagriculture" element={<CSAPage/>} />
            
            {/* Farm routes */}
            <Route path="/farms" element={[<Headergreen />, <NavBarg />, <CSAHome />, <Footer />]} />
            <Route path="/farm/:farmId" element={[<Headergreen />, <NavBarg />, <FarmSubscriptionPage />, <Footer />]} />
            
            <Route path="/3d" element={<Cloudinary3DViewer/>} />  
            <Route path="/recipes" element={<RecipesPage />} />
        </Routes>
    );
};

export default AppRoutes;