import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneProduct, removeProduct, toggleTrue } from '../redux/actions/productActions';

function Cards({el}) {



    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleDelete=()=>{
        if (window.confirm('Are you sure'))
        {dispatch(removeProduct(el._id))}
    }
    const user=useSelector(state=>state.authReducer.user)

    return <div className='carte'  >
        <Card  style={{ width: '18rem' , backgroundColor:'#0A1929' , display:'flex' , flexWrap:'wrap'}}>
        <Card.Img variant="top" src={`./uploads/${el.imageUrl}`} />
            <Card.Header></Card.Header>
            <ListGroup variant="flush"  >
                <ListGroup.Item style={{backgroundColor:'#0A1929' ,color:'white' }}>Name product : {el.nameProduct}</ListGroup.Item >
                <ListGroup.Item style={{backgroundColor:'#0A1929' ,color:'white' }}>Description: {el.discProduct}</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'#0A1929' ,color:'white' }}>Prix : {el.prixProduct}</ListGroup.Item>
            </ListGroup>
            {
                user&&user.role==1 && <div><Button variant="info" onClick={()=>{dispatch(getOneProduct(el._id));dispatch(toggleTrue());navigate('/AddEdit')}}>Edit</Button>
                
                <Button variant="danger" onClick={handleDelete}>Delete</Button> 
                </div>
            }

                
          
        </Card>

    </div>;
}

export default Cards;
