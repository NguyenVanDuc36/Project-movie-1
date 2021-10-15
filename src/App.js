import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import { HomeTempalte } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import { DetailTempalte } from './templates/HomeTemplate/layout/DetailHometemplate';
import phimDangChieu from './Components/OwlCarousel/phimDangChieu';
import './assets/styles/layout/Home.scss'
// import {CheckoutTempalte}  from './templates/CheckoutTemplate/CheckoutTemplate';
import {Suspense, lazy} from 'react';
import { UserTempalte } from './templates/UserTemplate/UserTemplate';
import Checkout from './pages/Checkout/Checkout';
import DatVe from './pages/Checkout/datVe/DatVe';
import Loading from './Components/Loading/Loading';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Films from './pages/Admin/Films/Films';
import ShowTime from './pages/Admin/ShowTime/ShowTime';
import User from './pages/Admin/User/User'; 
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';
import AddUser from './pages/Admin/User/addUser/AddUser';
import Profile from './pages/Profile/Profile';
import EditUser from './pages/Admin/User/editUser/EditUser';
export const history = createBrowserHistory();
const CheckoutTempalte = lazy(()=> import('./templates/CheckoutTemplate/CheckoutTemplate'))
function App() {
  return (
    <Router history={history} >
      <Loading/>
      <Switch>
        
        <HomeTempalte path="/contact" exact Component={Contact}/>
        <DetailTempalte path="/detail/:id" exact Component={Detail}/>
        <UserTempalte path="/register" exact Component={Register}/>
        <HomeTempalte path="/news" exact Component={News}/>
        <UserTempalte path="/login" exact Component={Login}/>
        <HomeTempalte path="/" exact Component={Home}/>
        <HomeTempalte path="/home" exact Component={Home}/>
        {/* <CheckoutTempalte path="/checkout/:id" exact Component={DatVe}/> */}
        <AdminTemplate path="/admin" exact Component={Dashboard}/>
        <AdminTemplate path="/admin/dashboard" exact Component={Dashboard}/>
        <AdminTemplate path="/admin/films" exact Component={Films}/>
        <AdminTemplate path="/admin/films/showtimes/:id/:tenphim" exact Component={ShowTime}/>
        <AdminTemplate path="/admin/users" exact Component={User}/>
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew}/>
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit}/>
        <AdminTemplate path="/admin/users/adduser" exact Component={AddUser}/>
        <AdminTemplate path="/admin/users/edit/:id" exact Component={EditUser}/>
        
        <Suspense fallback={<Loading/>}>
          <CheckoutTempalte path="/checkout/:id" exact Component={DatVe}/>
          <CheckoutTempalte path="/profile" exact Component={Profile}/>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
