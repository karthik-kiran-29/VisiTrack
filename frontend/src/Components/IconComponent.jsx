import React from "react";

const IconComponent = ({ActionName, ActionColor, ActionLink}) => {
    return(
        <button 
            className={`${ActionColor} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
            {ActionName}
        </button>
    )
}

export default IconComponent;