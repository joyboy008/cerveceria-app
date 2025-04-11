import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { state } = useAuth();

    if (!state.token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
