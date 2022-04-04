import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllHotels, toggleFalse } from '../redux/actions/productActions';
import Cards from './Cards';



  function Hotels() {
    const hotels=useSelector(state=>state.productReducer.hotels)
    // get products
    useEffect(()=>{
      dispatch(getAllHotels())
  
    },[])
    const user=useSelector(state=>state.authReducer.user)
  const dispatch=useDispatch()
  return <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'space-around'}}>
    {
      user&&user.role==1&&  <Link to='/AddEdit'>
      <Button variant="dark">Add New Product</Button>
      </Link>
    }
       {hotels.map(el=><Cards key={el._id} el={el}/>)}


  </div>;
}

export default Hotels;
