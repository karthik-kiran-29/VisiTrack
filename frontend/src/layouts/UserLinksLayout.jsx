import React, { useEffect, useState } from "react";
import LabelComponent from "../Components/LabelComponent";
import IconComponent from "../Components/IconComponent";
import { useAuth } from "../Context/AuthProvider";
import Toaster from "../Components/Toaster"; // Import the Toaster component

const UserLinksLayout = () => {
    const {user} = useAuth();
    const [datas, setDatas] = useState([]);
    
    // State for toast notifications
    const [toast, setToast] = useState({
        show: false,
        message: "",
        color: "green"
    });

    const name = !user ? "Testing" : user.name;

    const DeleteHandler = (id) => {
        setDatas(prev => prev.filter(data => data._id !== id));
    }

    const AddHandler = (NewData) => {
        setDatas([...datas, NewData]);
    }
    
    // Clear toast function
    const clearToast = () => {
        setToast({ ...toast, show: false });
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(import.meta.env.VITE_DOMAIN_URL + "/api/auth/key", {
              method: "GET",
              credentials: "include"
            });
      
            if (!response.ok) {
              const errorData = await response.json();
              // Show error toast
              setToast({
                show: true,
                message: `Fetch failed: ${errorData.message}`,
                color: "red"
              });
              console.error("Login failed:", errorData.message);
              return;
            }
      
            const json = await response.json();
            console.log(json);
            setDatas(json.result);
            
            // Show success toast
            setToast({
                show: true,
                message: "Access links loaded successfully",
                color: "green"
            });
          } catch (error) {
            // Show error toast
            setToast({
                show: true,
                message: `Error fetching data: ${error.message}`,
                color: "red"
            });
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
    }, []);
      
    return(
        <div className="bg-gray-50 min-h-screen">
            {/* Add Toaster component */}
            {toast.show && (
                <Toaster 
                    message={toast.message} 
                    color={toast.color} 
                    onClose={clearToast}
                />
            )}
            
            <div className="bg-white shadow">
                <div className="max-w-5xl mx-auto px-4 py-5 sm:px-6 flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-900">Hello, {name}</div> 
                    <IconComponent {...{ActionName:"Add", ActionColor:"bg-indigo-600 text-white"}} AddHandler={AddHandler}/>
                </div>
            </div>
            
            <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Access Links</h2>
                <div className="space-y-4">
                    {datas.length > 0 ? (
                        datas.map((data) => (
                            <LabelComponent key={data._id} {...data} DeleteHandler={DeleteHandler}/>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-white rounded-lg shadow">
                            <p className="text-gray-600 mb-4">You don't have any access links yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserLinksLayout;