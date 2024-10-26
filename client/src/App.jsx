
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Profile } from "react";


export default function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />}/>
     

    </Routes>

    </BrowserRouter>
  ) 
}