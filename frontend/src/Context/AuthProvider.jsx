import { Children, createContext, useContext, useState } from "react";


const AuthContext = createContext(null);

const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);

    function login(user){
        setUser(user)
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

const useAuth = useContext(AuthContext);

export {useAuth,AuthProvider};