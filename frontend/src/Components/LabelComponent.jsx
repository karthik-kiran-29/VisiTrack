import React from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";
import IconComponent from "./IconComponent";

const LabelComponent = ({LabelName, LabelLink}) => {  
    return(
        <div className="flex items-center justify-between p-4 m-2 rounded-lg shadow-sm bg-white border border-gray-100">
            <span className="font-medium text-gray-800">{LabelName}</span>
            <div className="flex space-x-2">
                <CopyToClipboardButton content={LabelLink}/>
                <IconComponent {...{ActionName:"Update", ActionColor:"text-white bg-blue-600 hover:bg-blue-700"}}/>
                <IconComponent {...{ActionName:"Delete", ActionColor:"text-white bg-red-500 hover:bg-red-600"}}/>
            </div>
        </div>
    )
}

export default LabelComponent;