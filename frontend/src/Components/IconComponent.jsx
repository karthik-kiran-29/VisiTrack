import React from "react";

const IconComponent = ({ ActionName, ActionColor, ActionID, DeleteHandler,AddHandler }) => {
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
      const name = prompt("What Should be the name of it??")
      const {result} = await performRequest("POST", "/api/auth/key", {name:name});

      AddHandler({name:result.name,_id:result._id,count:result.count})
      
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