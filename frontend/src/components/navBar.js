import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../components/12.PNG'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';




export default function ButtonAppBar() {


  const auth= useSelector(state=>state.authReducer.auth)
  const token= localStorage.getItem('token')
    const dispatch = useDispatch()


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button as={Link} to='/' >
        <img  src={logo} style={{height:'100px'}} alt='...'></img>
        </Button>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          <Button as={Link} to='/hotels'style={{textDecoration: 'none'}} variant="contained" size="large">
          Hotels
            </Button>

          <Button as={Link} to='/restaurants' style={{textDecoration: 'none'}} variant="contained" size="large">
        Restaurants
            </Button>

          <Button as={Link} to='/houses'style={{textDecoration: 'none'}} variant="contained" size="large">
          Houses
            </Button>  

          <Button as={Link} to='/thingstodo'style={{textDecoration: 'none'}} variant="contained" size="large">
        Things To Do
            </Button>

          </Typography>

          {token ?     <div> <Button  onClick={()=> dispatch(logout())}  style={{textDecoration: 'none' , color:'white'}} >Logout</Button>  
          <Button   as={Link}  to='/profile' style={{textDecoration: 'none' , color:'white'}} >Profile</Button>
        </div> :
        <>
          <Button as={Link} to='/signup'  color="inherit" style={{textDecoration: 'none'}} >SignUp</Button>
        <Button as={Link} to='/login'  color="inherit" style={{textDecoration: 'none' , color:'white'}} >Login</Button>
        </>}
          


        </Toolbar>
      </AppBar>
    </Box>
  );
}
