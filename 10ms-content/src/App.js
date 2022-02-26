import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import PrimarySearchAppBar from './Components/Topbar/PrimarySearchAppBar';
import SignIn from './Components/Sign-in/SignIn';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Content from './Components/pages/Contents';

function App() {
  return (
    <>
      <AuthProvider>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <Routes>
          {/* <PrivateRoute path="/home"/> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contents" element={<Content />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
