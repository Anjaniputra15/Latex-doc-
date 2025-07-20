import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

// Simple test component that uses auth
const TestHome = () => {
  return (
    <div className="p-8 bg-white text-black">
      <h1 className="text-3xl font-bold">Home Page with Auth Context</h1>
      <p>This tests the AuthProvider integration.</p>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Toaster />
            <BrowserRouter>
              <div className="p-4 bg-green-600 text-white">
                <h1 className="text-2xl font-bold">Gym UI - Auth Test</h1>
              </div>
              
              <Routes>
                <Route path="/" element={<TestHome />} />
                <Route path="*" element={<div className="p-8"><h1>404</h1></div>} />
              </Routes>
            </BrowserRouter>
          </div>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;