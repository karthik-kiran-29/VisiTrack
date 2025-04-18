import React, { useState } from "react";
import InputBoxComponent from "../Components/InputBoxComponent";
import { useAuth } from "../Context/AuthProvider";
import Toaster from "../Components/Toaster"; // Import the Toaster component

const LoginLayout = () => {
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  
  // State for toast notifications
  const [toast, setToast] = useState({
    show: false,
    message: "",
    color: "green"
  });

  function onChangeHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Clear toast function
  const clearToast = () => {
    setToast({ ...toast, show: false });
  };

  const submitHandler = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_DOMAIN_URL + "/api/v1/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password
          }),
          credentials: "include"
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        // Show error toast instead of console.error
        setToast({
          show: true,
          message: `Login failed: ${errorData.message}`,
          color: "red"
        });
        return;
      }

      const json = await response.json();
      
      login({ email: json.result.email, name: json.result.name });

      // Show success toast instead of console.log
      setToast({
        show: true,
        message: "Login successful!",
        color: "green"
      });
    } catch (error) {
      // Show error toast instead of console.error
      setToast({
        show: true,
        message: `Error during login: ${error.message}`,
        color: "red"
      });
    }
  };

  const { email, password } = form;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      {/* Show the Toaster component conditionally */}
      {toast.show && (
        <Toaster 
          message={toast.message} 
          color={toast.color} 
          onClose={clearToast}
        />
      )}
      
      <div className="w-full max-w-md space-y-6 p-8 bg-white rounded-xl shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome back</h2>
          <p className="text-gray-500 text-sm">
            Access your account securely by using your email and password
          </p>
        </div>

        <div className="space-y-4">
          <InputBoxComponent {...{ InputType: "text", InputName: "email", OnChangeHandler: onChangeHandler, value: email }} />
          <InputBoxComponent {...{ InputType: "password", InputName: "password", OnChangeHandler: onChangeHandler, value: password }} />

          <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              Forgot password?
            </a>
          </div>

          <button
            className="w-full py-3 bg-blue-900 text-white font-medium rounded-lg shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            onClick={submitHandler}
          >
            Sign in
          </button>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 font-medium">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;