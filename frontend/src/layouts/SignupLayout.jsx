import React, { useState } from "react";
import InputBoxComponent from "../Components/InputBoxComponent";
import { useAuth } from "../Context/AuthProvider";
import Toaster from "../Components/Toaster"; // Import the Toaster component

const SignupLayout = () => {
  const { login } = useAuth();
  
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  // State for toast notifications
  const [toast, setToast] = useState({
    show: false,
    message: "",
    color: "green"
  });

  function onChangeHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Keep console.log as requested
    console.log(form);
  }
  
  // Clear toast function
  const clearToast = () => {
    setToast({ ...toast, show: false });
  };

  const submitHandler = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_DOMAIN_URL + "/api/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: form.fullName,
            email: form.email,
            password: form.password
          }),
          credentials: 'include'
        }
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        // Show error toast
        setToast({
          show: true,
          message: `Signup failed: ${errorData.message}`,
          color: "red"
        });
        // Keep console.error as requested
        console.error("Signup failed:", errorData.message);
        return;
      }
      
      const json = await response.json();
      
      login({ email: json.result.email, name: json.result.name });
      
      // Show success toast
      setToast({
        show: true,
        message: "Signup successful!",
        color: "green"
      });
      // Keep console.log as requested
      console.log("Signup successful:", json);
    } catch (error) {
      // Show error toast
      setToast({
        show: true,
        message: `Error during signup: ${error.message}`,
        color: "red"
      });
      // Keep console.error as requested
      console.error("Error during signup:", error);
    }
  };

  const { fullName, email, password, confirmPassword } = form;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      {/* Add Toaster component */}
      {toast.show && (
        <Toaster 
          message={toast.message} 
          color={toast.color} 
          onClose={clearToast}
        />
      )}
      
      <div className="w-full max-w-md space-y-6 p-8 bg-white rounded-xl shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create an account</h2>
          <p className="text-gray-500 text-sm">Sign up to get started with our services</p>
        </div>
        
        <div className="space-y-4">
          <InputBoxComponent {...{ InputType: "text", InputName: "fullName", OnChangeHandler: onChangeHandler, value: fullName }} />
          <InputBoxComponent {...{ InputType: "text", InputName: "email", OnChangeHandler: onChangeHandler, value: email }} />
          <InputBoxComponent {...{ InputType: "password", InputName: "password", OnChangeHandler: onChangeHandler, value: password }} />
          <InputBoxComponent {...{ InputType: "password", InputName: "confirmPassword", OnChangeHandler: onChangeHandler, value: confirmPassword }} />
          
          <button
            className="w-full py-3 bg-blue-900 text-white font-medium rounded-lg shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            onClick={submitHandler}
          >
            Sign up
          </button>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 font-medium">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;