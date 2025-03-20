import React from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";
import IconComponent from "./IconComponent";

const LabelComponent = ({LabelName,LabelLink}) =>{  
    return(
        <div className="flex md:p-10 p-5 flex-row justify-between border-red-100 border-2 m-2 ">
            {LabelName}
            <CopyToClipboardButton  content={LabelLink}/>
            <IconComponent {...{ActionName:"Update",ActionColor:"border-black border-2 bg-amber-400"}}/>
            <IconComponent {...{ActionName:"Delete",ActionColor:"border-black border-2 bg-green-400"}}/>
        </div>
    )
}

export default LabelComponent;