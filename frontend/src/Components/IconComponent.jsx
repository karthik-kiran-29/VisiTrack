import React from "react";

const IconComponent = ({ ActionName, ActionColor, ActionID,DeleteHandler }) => {
  const DeleteLink = async (ActionID) => {
    try {
      const response = await fetch(import.meta.env.VITE_DOMAIN_URL + "/api/auth/key", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ keyid: ActionID }),
        credentials: "include"
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Operation failed:", errorData.message);
        return;
      }

      const json = await response.json();
      console.log("Deleted:", json);
    } catch (error) {
      console.error("Cannot Delete Now", error);
    }
  };

  const UpdateLink = async (ActionID) => {
    console.log("Update clicked for ID:", ActionID);
    // Add your update logic here
  };

  const handleClick = () => {
    if (ActionName === "Delete") {
      DeleteLink(ActionID);
      DeleteHandler(ActionID)
    } else {
      UpdateLink(ActionID);
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
