import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Purchase from './Components/Purchase/Purchase';
import Login from '../src/Login/Login';
import SignUp from './Login/Signup';

import RequireAuth from './Login/RequireAuth';
import UserDetails from './Components/Purchase/Purchase';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import AddReview from './Pages/DashBoard/AddReview';
import MyProfile from './Pages/DashBoard/MyProfile';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>



      </Routes>

    </div>
  );
}

export default App;