import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useAuth } from '../Context/AuthProvider';

const ProtectedRoute = ({ children }) => {
    const {user} = useAuth();
    const navigate = useNavigate();

    if (user===null) {
        navigate("/login")
    }

    return children;
};

export default ProtectedRoute;