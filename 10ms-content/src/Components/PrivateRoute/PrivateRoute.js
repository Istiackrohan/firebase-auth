import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Firebase/useAuth';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    console.log( user );
    return (
        <>
            {user.displayName ? children : <Navigate to="/sign-in"/>}
        </>
    );
};

export default PrivateRoute;