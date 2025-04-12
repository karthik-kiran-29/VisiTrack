import React, { useState } from "react";
import InputBoxComponent from "../Components/InputBoxComponent";

const LoginLayout = () => {
    const [form,setForm] = useState({email:"",password:""});

    function onChangeHandler(e){
        setForm({...form,[e.target.name]:e.target.value});
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md space-y-6 p-8 bg-white rounded-xl shadow-sm">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome back</h2>
                    <p className="text-gray-500 text-sm">Access your account securely by using your email and password</p>
                </div>
                
                <div className="space-y-4">
                    <InputBoxComponent {...{InputType:"text", InputName:"email",OnChangeHandler:onChangeHandler,value:email}}/>
                    <InputBoxComponent {...{InputType:"password", InputName:"password",OnChangeHandler:onChangeHandler,value:password}}/>
                    
                    <div className="flex justify-end">
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
                    </div>
                    
                    <button className="w-full py-3 bg-blue-900 text-white font-medium rounded-lg shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2">
                        Sign in
                    </button>
                    
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Don't have an account? <a href="/signup" className="text-blue-600 font-medium">Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginLayout;