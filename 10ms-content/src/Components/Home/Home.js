import React from 'react';
import useAuth from '../Firebase/useAuth';

const Home = () => {

    const {user} = useAuth();

    return (
    <h1>Welcome {user?.displayName}</h1>
    );
};

export default Home;