import React from "react";

const InputBoxComponent = ({InputType, InputName}) => {
    return(
        <input 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors bg-gray-50 text-gray-800" 
            type={InputType} 
            name={InputName}
            placeholder={InputName}
        />
    )
}

export default InputBoxComponent;