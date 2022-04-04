import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {

    const token= localStorage.getItem('token')
    // const auth= useSelector(state=>state.authReducer.auth)
    // console.log(token)
    // console.log(children)
  return <div>

{token ? children : <Navigate  to= '/login'  />}
  </div>;
}

export default PrivateRoute;
