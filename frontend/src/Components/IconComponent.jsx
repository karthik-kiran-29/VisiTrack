import React from "react";

const IconComponent = ({ActionName,ActionColor,ActionLink})=>{

    return(
        <button className={`${ActionColor} p-2`}>
            {ActionName}
        </button>
    )
}

export default IconComponent;