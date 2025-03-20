import React from "react";
import InputBoxComponent from "../Components/InputBoxComponent";

const LoginLayout = ()=>{

    return(
        <div className="h-screen my-auto flex flex-col m-auto w-96">
            <InputBoxComponent  {...{InputType:"text",InputName:"loginname"}}/>
            <InputBoxComponent  {...{InputType:"password",InputName:"passwordname"}}/>
        </div>
    );
}

export default LoginLayout;