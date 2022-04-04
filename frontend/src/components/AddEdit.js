import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { addNewProduct, updateProduct} from '../redux/actions/productActions';
import '../App.css';



function AddEdit() {
    const navigate=useNavigate()
    const edit =useSelector(state=>state.productReducer.edit)
    const product =useSelector(state=>state.productReducer.product)
    const [formData, setFormData] = useState({ nameProduct: '', discProduct: '', prixProduct: 0,specialiste:'' })
     const [file,setFile]=useState(null)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })  
    }
    const dispatch = useDispatch()

    const handleAdd=(e)=>{
        e.preventDefault()
        let data=new FormData()
        data.append('nameProduct',formData.nameProduct)
        data.append('discProduct',formData.discProduct)
        data.append('prixProduct',formData.prixProduct)
        data.append('specialiste',formData.specialiste)
        data.append('myImage',file)

        dispatch(addNewProduct(data))
        navigate('/')
    }
    const handleUpdate=(e)=>{
      
        dispatch(updateProduct(product._id,formData))
        navigate('/')
    }
    useEffect(()=>{
        edit ? setFormData({nameProduct:product.nameProduct, discProduct:product.discProduct, prixProduct:product.prixProduct,specialiste:product.specialiste})
        :setFormData({ nameProduct: '', discProduct: '', prixProduct: 0,specialiste:'' })
    },[product])



    return (<div className='add'>

        <Form onSubmit={handleAdd}>


            <Form.Group className="mb-3" controlId="formGridText">
                <Form.Label>Name Product</Form.Label>
                <Form.Control type='text' placeholder="Name..." name='nameProduct' value={formData.nameProduct} onChange={handleChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" name='discProduct' value={formData.discProduct} onChange={handleChange} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridNumber">
                <Form.Label>Prix</Form.Label>
                <Form.Control type='number' placeholder="Prix..." name='prixProduct' value={formData.prixProduct} onChange={handleChange}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridFile">
                <Form.Label>Image</Form.Label>
                <Form.Control type='file' placeholder="Prix..." name='prixProduct'  onChange={e=>setFile(e.target.files[0])}  />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formGridText">
                <Form.Label>Specialiste</Form.Label>
                <Form.Control type='text' placeholder="hotels or restaurants or houses or things" name='specialiste' value={formData.specialiste} onChange={handleChange} />
            </Form.Group>
           
              
               <Button variant="primary" type="submit">Add</Button>
               
               {edit?  <Button variant="primary" type="submit" onClick={handleUpdate}>Edit</Button>: 
               <Button variant="primary" type="submit" onClick={handleAdd}>Add</Button>
               }
        </Form>
    </div>);

}

export default AddEdit;
