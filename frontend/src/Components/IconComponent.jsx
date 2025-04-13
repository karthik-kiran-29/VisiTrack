import React from "react";

const IconComponent = ({ ActionName, ActionColor, ActionID, DeleteHandler,RequestBody, AddHandler }) => {
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
      // For Add operation, use POST method with appropriate endpoint
      await performRequest("POST", "/api/auth/key", RequestBody);
      // If you need to handle the result or update UI after adding,
      // you could accept an AddHandler prop similar to DeleteHandler
    }
  };

  return (
    <button
      className={`${ActionColor} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      onClick={handleClick}
    >
      {ActionName}
    </button>
  );
};

export default IconComponent;