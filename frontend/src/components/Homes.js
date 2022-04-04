import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getAllHouses } from '../redux/actions/productActions';
import Cards from './Cards';



  function Houses() {
    const houses=useSelector(state=>state.productReducer.houses)
    // get products
    useEffect(()=>{
      dispatch(getAllHouses())
  
    },[])
    const user=useSelector(state=>state.authReducer.user)
  const dispatch=useDispatch()
  return <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'space-around'}}>
    {
      user&&user.role==1&&  <Link to='/AddEdit'>
      <Button variant="dark">Add New Product</Button>
      </Link>
    }
       {houses.map(el=><Cards key={el._id} el={el}/>)}


  </div>;
}

export default Houses;
