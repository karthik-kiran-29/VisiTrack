import React from "react";

const ButtonComponent = ({InputName}) => {
    return(
        <input 
            className="w-full py-3 px-4 bg-blue-900 text-white font-medium rounded-lg shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors cursor-pointer" 
            type="submit" 
            name={InputName} 
            value={InputName}
        />
    )
}

export default ButtonComponent;