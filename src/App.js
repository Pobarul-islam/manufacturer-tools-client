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
import Addproduct from './Pages/AddProduct/AddProduct';
import AddProduct from './Pages/DashBoard/AddProduct';
import Portfolio from './Pages/Portfolio/Portfolio';
import NotFound from './Pages/Shared/NotFound';
import AllProduct from './Pages/AllProduct/AllProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/allproduct' element={<AllProduct></AllProduct>}></Route>


        <Route path='/purchase/:id' element={
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
          <Route path='add-product' element={<AddProduct />}></Route>
          <Route path='/contact' element={<Contact />}></Route>

        </Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <Addproduct></Addproduct>
          </RequireAuth>
        }></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;