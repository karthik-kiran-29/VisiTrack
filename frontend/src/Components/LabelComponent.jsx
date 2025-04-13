import React from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";
import IconComponent from "./IconComponent";

const LabelComponent = ({_id,name,count,DeleteHandler,UpdateHandler}) => { 
    const LabelLink = import.meta.env.VITE_DOMAIN_URL + "/api/visitor/" + _id ;
    return(
        <div className="flex items-center justify-between p-4 m-2 rounded-lg shadow-sm bg-white border border-gray-100">
            <span className="font-medium text-gray-800">{name}</span>
            <div className="flex space-x-2">
                <div>Count: {count}</div>
                <CopyToClipboardButton content={LabelLink}/>
                <IconComponent {...{ActionName:"Update", ActionColor:"text-white bg-blue-600 hover:bg-blue-700",ActionID:_id}} DeleteHandler={DeleteHandler}/>
                <IconComponent {...{ActionName:"Delete", ActionColor:"text-white bg-red-500 hover:bg-red-600",ActionID:_id}}/>
            </div>
        </div>
    )
}

export default LabelComponent;