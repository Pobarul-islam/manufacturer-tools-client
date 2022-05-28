import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import SignUp from './Pages/Login/Signup';
import Tools from './Pages/Home/Tools';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />


        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path="login" element={<Login />} />
        <Route path='signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;