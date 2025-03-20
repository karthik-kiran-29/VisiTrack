import React from "react";

const InputBoxComponent = ({InputType,InputName})=>{

    return(
        <input className="border-2 border-black w-auto m-auto" type={InputType} name={InputName}/>
    )
}

export default InputBoxComponent;