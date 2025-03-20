import React from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";

const LabelComponent = ({LabelName,LabelLink}) =>{  
    return(
        <div className="flex p-10 flex-row justify-between border-red-100 border-2 m-2 ">
            <div>{LabelName}</div>
            <CopyToClipboardButton  content={LabelLink}/>
        </div>
    )
}

export default LabelComponent;