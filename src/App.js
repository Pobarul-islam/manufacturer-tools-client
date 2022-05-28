import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import SignUp from './Pages/Login/Signup';
import Tools from './Pages/Home/Tools';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import AddReview from './Pages/DashBoard/AddReview';
import MyProfile from './Pages/DashBoard/MyProfile';
import Blogs from './Blogs/Blogs';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />


        <Route path='/purchase' element={

          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={

          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route path='orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp></SignUp>}></Route>


      </Routes>
    </div>
  );
}

export default App;