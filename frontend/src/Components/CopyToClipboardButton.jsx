import React, { useState } from 'react';

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      console.log('Copied to clipboard:', content);
      
      // Reset the "Copied!" state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      setIsCopied(false);
      console.error('Unable to copy to clipboard:', error);
    }
  };

  return { isCopied, copyToClipboard };
};

const CopyToClipboardButton = ({ content }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <button 
      onClick={() => copyToClipboard(content)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isCopied 
          ? 'bg-green-500 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  );
};

export default CopyToClipboardButton;