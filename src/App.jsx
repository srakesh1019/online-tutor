import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import "./App.css";
import Error from "./components/error/Error";
import Register from "./pages/register/Register";
import Tutors from "./pages/tutors/Tutors";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tutors" element={<Tutors/>}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register/>} />        
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
