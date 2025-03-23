import React from "react";
import InputBoxComponent from "../Components/InputBoxComponent";

const SignupLayout = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md space-y-6 p-8 bg-white rounded-xl shadow-sm">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create an account</h2>
                    <p className="text-gray-500 text-sm">Sign up to get started with our services</p>
                </div>
                
                <div className="space-y-4">
                    <InputBoxComponent {...{InputType:"text", InputName:"Full Name"}}/>
                    <InputBoxComponent {...{InputType:"text", InputName:"Email Address"}}/>
                    <InputBoxComponent {...{InputType:"password", InputName:"Password"}}/>
                    <InputBoxComponent {...{InputType:"password", InputName:"Confirm Password"}}/>
                    
                    <button className="w-full py-3 bg-blue-900 text-white font-medium rounded-lg shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2">
                        Sign up
                    </button>
                    
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Already have an account? <a href="/login" className="text-blue-600 font-medium">Sign In</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupLayout;