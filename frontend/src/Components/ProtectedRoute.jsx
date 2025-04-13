import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../Context/AuthProvider';

const ProtectedRoute = ({ children }) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/signup" />;
    }

    return children;
};

export default ProtectedRoute;