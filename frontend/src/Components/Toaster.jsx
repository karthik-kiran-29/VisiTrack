import { useState, useEffect } from 'react';

// Custom close icon component
const CloseIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Toaster({ message = "This is a notification", color = "green", duration = 3000, onClose = () => {} }) {
  const [visible, setVisible] = useState(true);
  
  // Color configuration
  const colorStyles = {
    green: {
      background: 'bg-green-500',
      border: 'border-green-600',
      text: 'text-white'
    },
    red: {
      background: 'bg-red-500',
      border: 'border-red-600',
      text: 'text-white'
    }
  };

  const selectedColor = colorStyles[color] || colorStyles.green;
  
  // Auto-dismiss after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const closeToast = () => {
    setVisible(false);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center max-w-md">
      <div className={`${selectedColor.background} ${selectedColor.border} ${selectedColor.text} px-4 py-3 rounded shadow-lg border flex items-center justify-between`}>
        <div className="mr-8">{message}</div>
        <button 
          onClick={closeToast}
          className="ml-auto focus:outline-none hover:opacity-75 transition-opacity"
          aria-label="Close"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}