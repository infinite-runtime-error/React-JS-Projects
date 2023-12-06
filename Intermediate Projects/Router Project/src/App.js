import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}></Navbar>

        <Routes>

            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
            <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
            <Route path="/dashboard" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }></Route>
        </Routes>
    </div>
  );
}

export default App;
