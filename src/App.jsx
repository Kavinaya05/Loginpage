import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App()
{
  const [user, setuser] = useState([
    {
      username: "Pream",
      password: "12345",
    },
    {
      username:"john",
      password:"12345"    
    }
  ]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login user={user} setuser={setuser} />}></Route>
        <Route path="/signup" element={<Signup user={user} setuser={setuser} />}></Route>
        <Route path="/landing" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App