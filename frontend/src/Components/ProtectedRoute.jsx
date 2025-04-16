import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        // Function to check if token cookie exists
        const checkTokenCookie = () => {
            const cookies = document.cookie.split(';');
            const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
            
            if (tokenCookie) {
                setIsAuthenticated(true);
            } else {
                navigate("/login", { replace: true });
            }
            setIsLoading(false);
        };
        
        checkTokenCookie();
    }, [navigate]);
    
    // Show nothing while checking authentication
    if (isLoading) {
        return <LoadingSpinner/>; // Or return a loading spinner/component
    }
    
    // Render children only if authenticated
    return isAuthenticated ? children : null;
};

export default ProtectedRoute;