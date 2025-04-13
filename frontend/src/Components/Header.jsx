import React,{useContext} from "react";
import { useNavigate,Link } from "react-router";
import { useAuth } from "../Context/AuthProvider";

const Header = () => {
    const {user,logout} = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
      logout();
      navigate('/');
    };
    
    return (
      <nav className="bg-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">VisiTracks</Link>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="hidden md:inline">Welcome, {user.name}</span>
                <Link to="/dashboard" className="hover:text-indigo-200">Dashboard</Link>
                <button 
                  onClick={handleLogout}
                  className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-indigo-200">Sign In</Link>
                <Link 
                  to="/signup" 
                  className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  };

  export default Header;
  