// src/components/Background.jsx
import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-primary via-primary to-secondary min-h-screen">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
