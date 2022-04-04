import ButtonAppBar from './components/navBar'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Houses from './components/Homes'
import Restaurants from './components/Restaurants'
import Hotels from './components/Hotels'
import Thingstodo from './components/Thingstodo'
import SignInSide from './components/Login'
import SignUp from './components/Signup/SignUp'
import Profile from './components/Profile'
import PrivateRoute from './components/privateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEdit from './components/AddEdit'
import NotFound from './components/NotFound'








export default function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/houses' element={<Houses/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/thingstodo' element={<Thingstodo/>}/>
        <Route path='/login' element={<SignInSide/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile'  element={<PrivateRoute><Profile></Profile></PrivateRoute>}></Route>
        <Route path='/AddEdit' element={<PrivateRoute><AddEdit/></PrivateRoute>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
} 