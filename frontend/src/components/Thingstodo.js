import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllThings, toggleFalse } from '../redux/actions/productActions';
import Cards from './Cards';



  function Thingstodo() {
    const things=useSelector(state=>state.productReducer.things)
    // get products
    useEffect(()=>{
      dispatch(getAllThings())
  
    },[])
    const user=useSelector(state=>state.authReducer.user)
  const dispatch=useDispatch()
  return <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'space-around'}}>
    {
      user&&user.role==1&&  <Link to='/AddEdit'>
      <Button variant="dark">Add New Product</Button>
      </Link>
    }
       {things.map(el=><Cards key={el._id} el={el}/>)}


  </div>;
}

export default Thingstodo;
