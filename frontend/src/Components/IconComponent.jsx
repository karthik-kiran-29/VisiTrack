import React from "react";

const IconComponent = ({ ActionName, ActionColor, ActionID, DeleteHandler, AddHandler }) => {
  const performRequest = async (method, endpoint, body) => {
    try {
      const response = await fetch(import.meta.env.VITE_DOMAIN_URL + endpoint, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
        credentials: "include"
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Operation failed: ${errorData.message}`);
        return null;
      }

      const json = await response.json();
      console.log(`${method} operation successful:`, json);
      return json;
    } catch (error) {
      console.error(`Cannot perform ${method} operation:`, error);
      return null;
    }
  };

  const handleClick = async () => {
    if (ActionName === "Delete" && ActionID) {
      const body = { keyID: ActionID };
      const result = await performRequest("DELETE", "/api/auth/key", body);
      if (result && DeleteHandler) {
        DeleteHandler(ActionID);
      }
    }

    if (ActionName === "Add") {
      const name = prompt("What should be the name of your new access link?");
      if (name) {
        const {result} = await performRequest("POST", "/api/auth/key", {name: name});
        
        AddHandler({name: result.name, _id: result._id, count: result.count});
      }
    }
  };

  // Default styling for Add button
  let buttonClasses = "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
  
  // Add specific styling based on action type
  if (ActionName === "Add") {
    buttonClasses += " bg-indigo-600 text-white hover:bg-indigo-700";
  } else if (ActionName === "Delete") {
    buttonClasses += " bg-red-600 text-white hover:bg-red-700";
  } else {
    // Use provided color if specified
    buttonClasses += ` ${ActionColor}`;
  }

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
    >
      {ActionName === "Add" ? (
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          {ActionName}
        </span>
      ) : (
        ActionName
      )}
    </button>
  );
};

export default IconComponent;