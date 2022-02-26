import React from 'react';
import useAuth from '../Firebase/useAuth';
// import useFirebase from '../Firebase/useFirebase';

const Home = () => {

    const {user} = useAuth();

    return (
    <h1>Welcome {user?.displayName}</h1>
    );
};

export default Home;