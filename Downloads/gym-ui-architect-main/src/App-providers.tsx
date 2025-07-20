import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

// Simple test component
const TestHome = () => (
  <div className="p-8 bg-white text-black">
    <h1 className="text-3xl font-bold">Home Page Test with Providers</h1>
    <p>This tests React Query and other basic providers.</p>
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50">
          <Toaster />
          <BrowserRouter>
            <div className="p-4 bg-green-600 text-white">
              <h1 className="text-2xl font-bold">Gym UI - Providers Test</h1>
            </div>
            
            <Routes>
              <Route path="/" element={<TestHome />} />
              <Route path="*" element={<div className="p-8"><h1>404</h1></div>} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;