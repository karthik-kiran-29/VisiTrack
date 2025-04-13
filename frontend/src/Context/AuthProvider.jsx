import { createContext, useContext, useState, } from "react";
import { useNavigate } from "react-router";


const AuthContext = createContext(null);

const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const nagivate = useNavigate();

    function login(user){
        setUser(user)
        nagivate("/dashboard")
    }

    function logout(){
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user,login,logout}} >
           {children}
        </AuthContext.Provider>   
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth,AuthProvider};