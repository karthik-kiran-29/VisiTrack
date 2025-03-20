import React from "react";
import LabelComponent from "../Components/LabelComponent";
import IconComponent from "../Components/IconComponent";

const UserLinksLayout = ({UserName}) =>{
    const test = {LabelName:"sample",LabelLink:"google"}
    return(
        <div>
            <div className="flex md:p-10 p-5 flex-row justify-between ">
                <div>{"Hello, " + UserName}</div> 
                <IconComponent {...{ActionName:"Add New Link",ActionColor:"border-black border-2 bg-blue-400"}}/>
            </div>
            <div className='p-4'>
            <LabelComponent  {...test} />
            <LabelComponent  {...test} />
            <LabelComponent  {...test} />
            <LabelComponent  {...test} />
            <LabelComponent  {...test} />
            </div>
        </div>
    )
}

export default UserLinksLayout;