import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Firebase/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    console.log(user.name)
    return (
        <>
            {user.email ? children : <Navigate to="/sign-in" replace />
            }
        </>
    );
};

export default PrivateRoute;