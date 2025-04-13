import React from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";
import IconComponent from "./IconComponent";

const LabelComponent = ({_id, name, count, DeleteHandler}) => { 
    const LabelLink = import.meta.env.VITE_DOMAIN_URL + "/api/visitor/" + _id;

    
    return(
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-lg shadow-sm bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-3 sm:mb-0">
                <div className="font-medium text-gray-900 text-lg">{name}</div>
                <div className="text-gray-600 text-sm mt-1 truncate max-w-md">{LabelLink}</div>
            </div>
            
            <div className="flex items-center space-x-4">
                <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                    {count} {count === 1 ? 'Visit' : 'Visits'}
                </div>
                <CopyToClipboardButton content={LabelLink}/>
                <IconComponent 
                    {...{
                        ActionName: "Delete", 
                        ActionColor: "bg-white text-red-600 border border-red-600 hover:bg-red-50",
                        ActionID: _id
                    }} 
                    DeleteHandler={DeleteHandler}
                />
            </div>
        </div>
    )
}

export default LabelComponent;