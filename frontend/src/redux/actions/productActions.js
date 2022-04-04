
import axios from 'axios'
import { GET_ALL_HOTELS,GET_ALL_HOUSES,GET_ALL_RESTAURANTS, GET_ALL_THINGS, GET_ONE_PRODUCT, TOGGLE_FALSE, TOGGLE_TRUE } from '../types/addTypes'

// get all hotels
export const getAllHotels = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/Product/hotels')
        dispatch({
            type: GET_ALL_HOTELS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)

    }

}

// get all restaurants
export const getAllRestaurants = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/Product/restaurants')
        dispatch({
            type: GET_ALL_RESTAURANTS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)

    }

}


// get all houses
export const getAllHouses = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/Product/houses')
        dispatch({
            type: GET_ALL_HOUSES,
            payload: res.data
        })
    } catch (error) {
        console.log(error)

    }

}

// get all things
export const getAllThings = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/Product/things')
        dispatch({
            type: GET_ALL_THINGS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)

    }

}
//Add Product
export const addNewProduct = (formData) => async (dispatch) => {
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }

    try {
      const res=  await axios.post('/api/Product', formData,config)
        console.log("add new product",res.data)
     
    } catch (error) {
        console.log(error)
    }
}

//Remove Product
export const removeProduct = (id) => async (dispatch) => {

    try {
        await axios.delete(`/api/Product/${id}`)
    } catch (error) {
        console.log(error)
    }
}

//Update product
export const updateProduct=(id,formData)=> async(dispatch)=>{
    try {
        await axios.put(`/api/Product/${id}`,formData)
     
    } catch (error) {
        console.log(error)
        
    }
}

export const toggleTrue=()=>{
    return {type : TOGGLE_TRUE}
}

export const toggleFalse=()=>{
    return {type : TOGGLE_FALSE}
    
}

export const getOneProduct=(id)=>async(dispatch)=>{

    try {
        const res = await axios.get(`/api/Product/${id}`)
        dispatch({type:GET_ONE_PRODUCT, payload:res.data})
    } catch (error) {
        console.log(error)
    }

}