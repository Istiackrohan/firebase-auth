import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../Firebase/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route path="/sign-in" element=
            {user.email ? children :
                <Navigate {...rest} to="/home" replace />
            }
        />
    );
};

export default PrivateRoute;