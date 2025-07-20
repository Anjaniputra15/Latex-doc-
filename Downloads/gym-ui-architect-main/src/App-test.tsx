import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Simple test component for each page
const TestHome = () => (
  <div className="p-8 bg-white text-black">
    <h1 className="text-3xl font-bold">Home Page Test</h1>
    <p>This is a simple test of the home page routing.</p>
  </div>
);

const TestShop = () => (
  <div className="p-8 bg-blue-100 text-black">
    <h1 className="text-3xl font-bold">Shop Page Test</h1>
    <p>This is a simple test of the shop page routing.</p>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
        <div className="p-4 bg-green-600 text-white">
          <h1 className="text-2xl font-bold">Gym UI Architect - Router Test</h1>
        </div>
        
        <Routes>
          <Route path="/" element={<TestHome />} />
          <Route path="/shop" element={<TestShop />} />
          <Route path="*" element={<div className="p-8"><h1>404 - Page Not Found</h1></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;