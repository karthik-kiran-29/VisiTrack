import React from "react";
import LabelComponent from "../Components/LabelComponent";
import IconComponent from "../Components/IconComponent";

const UserLinksLayout = ({UserName}) => {
    const test = {LabelName:"sample", LabelLink:"google"}
    return(
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-white shadow-sm">
                <div className="max-w-5xl mx-auto px-4 py-5 sm:px-6 flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-800">Hello, {UserName}</div> 
                    <IconComponent {...{ActionName:"Add New Link", ActionColor:"bg-blue-600 text-white"}}/>
                </div>
            </div>
            
            <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6">
                <div className="space-y-3">
                    <LabelComponent {...test} />
                    <LabelComponent {...test} />
                    <LabelComponent {...test} />
                    <LabelComponent {...test} />
                    <LabelComponent {...test} />
                </div>
            </div>
        </div>
    )
}

export default UserLinksLayout;