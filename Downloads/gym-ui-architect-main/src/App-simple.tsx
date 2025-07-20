import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-4">Gym UI Architect - Test</h1>
      <p className="text-xl">If you can see this, React and Tailwind are working!</p>
      <div className="mt-4 p-4 bg-green-100 rounded">
        <p>CSS and Tailwind are loaded properly.</p>
      </div>
    </div>
  );
};

export default App;