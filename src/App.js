import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
<<<<<<< HEAD
import Purchase from './Components/Purchase/Purchase';
import Login from '../src/Login/Login';
import SignUp from './Login/Signup';

import RequireAuth from './Login/RequireAuth';
import UserDetails from './Components/Purchase/Purchase';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import AddReview from './Pages/DashBoard/AddReview';
import MyProfile from './Pages/DashBoard/MyProfile';
import Blog from './Components/Blogs';



=======
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import SignUp from './Pages/Login/Signup';
>>>>>>> 2713277e7a294e252ba05648e7f2da38653bdd2f

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>

        </Route>
        <Route path='/myorders' element={<MyOrders></MyOrders>}></Route>
        <Route path='/review' element={<AddReview></AddReview>}></Route>
        <Route path='/profile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/userdetails' element={<UserDetails></UserDetails>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>


=======
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
>>>>>>> 2713277e7a294e252ba05648e7f2da38653bdd2f

        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;