import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent } from '../redux/actions/authActions';

function Profile() {
    const dispatch= useDispatch()
    const user = useSelector(state=> state.authReducer.user)

    useEffect(()=>{dispatch(getcurrent())} ,[user])
  return <div>
    <h1 style={{color:'white'}}>Welcome</h1>
<h1>  {user && user.email} </h1>
  </div>;
}

export default Profile; 
