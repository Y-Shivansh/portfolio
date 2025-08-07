import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-circle">
            <span>SS</span>
          </div>
        </div>
        <h2>Shivansh Sharma</h2>
        <p>Full Stack Developer</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
