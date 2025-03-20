import React from "react";
import LabelComponent from "../Components/LabelComponent";
import IconComponent from "../Components/IconComponent";

const UserLinksLayout = ({UserName}) =>{
    const test = {LabelName:"sample",LabelLink:"google"}
    return(
        <div>
            <div><div>{UserName}</div> <IconComponent {...{ActionName:"Add New Link",ActionColor:"border-black border-2 bg-blue-400"}}/></div>
            <div className='p-4'>
            <LabelComponent  {...test} key={1}/>
            <LabelComponent  {...test}  key={2}/>
            <LabelComponent  {...test} key={3}/>
            <LabelComponent  {...test} key={4}/>
            <LabelComponent  {...test} key={5}/>
            </div>
        </div>
    )
}

export default UserLinksLayout;