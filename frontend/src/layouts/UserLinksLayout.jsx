import React, { useEffect, useState } from "react";
import LabelComponent from "../Components/LabelComponent";
import IconComponent from "../Components/IconComponent";
import { useAuth } from "../Context/AuthProvider";

const UserLinksLayout = () => {
    const {user} = useAuth();
    const [datas,setDatas] = useState([]);

    const test = {LabelName:"sample", LabelLink:"google"}

    const DeleteHandler = (id)=>{
        setDatas(prev => prev.filter(data => data._id !== id));
    }

    const UpdateHandler = (id,updatedFields)=>{
        setDatas(prev =>
            prev.map(data =>
                data._id === id ? { ...data, ...updatedFields } : data
            )
        );
    }
    

    console.log(user)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(import.meta.env.VITE_DOMAIN_URL + "/api/auth/key", {
              method: "GET",
              credentials: "include"
            });
      
            if (!response.ok) {
              const errorData = await response.json();
              console.error("Login failed:", errorData.message);
              return;
            }
      
            const json = await response.json();
            console.log(json)
            setDatas(json.result);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, []); // {user.name} in the hello,
    return(
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-white shadow-sm">
                <div className="max-w-5xl mx-auto px-4 py-5 sm:px-6 flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-800">Hello, </div> 
                    <IconComponent {...{ActionName:"Add New Link", ActionColor:"bg-blue-600 text-white"}}/>
                </div>
            </div>
            
            <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6">
                <div className="space-y-3">
                {datas.map((data) => (
                    <LabelComponent key={data._id} {...data} DeleteHandler={DeleteHandler} UpdateHandler={UpdateHandler}/>
                ))}

                </div>
            </div>
        </div>
    )
}

export default UserLinksLayout;