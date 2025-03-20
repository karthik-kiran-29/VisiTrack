import React from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";

const LabelComponent = (LabelName,LabelLink) =>{  
    return(
        <div>
            {LabelName}
            <CopyToClipboardButton  content={LabelLink}/>
        </div>
    )
}