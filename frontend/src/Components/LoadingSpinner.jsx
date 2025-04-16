import { useState, useEffect } from 'react';

export default function LoadingSpinner({ text = "Loading...", size = "md", color = "blue" }) {
  const [dots, setDots] = useState("");
  
  // Animated dots effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Size mapping
  const sizeMap = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4",
    xl: "w-24 h-24 border-4"
  };
  
  // Color mapping
  const colorMap = {
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    yellow: "border-yellow-500",
    purple: "border-purple-500",
    gray: "border-gray-500"
  };
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div 
        className={`${sizeMap[size]} rounded-full border-t-transparent animate-spin`}
        style={{ borderTopColor: "transparent", borderStyle: "solid" }}
      />
      {text && (
        <p className="mt-4 text-gray-700 font-medium">
          {text}{dots}
        </p>
      )}
    </div>
  );
}