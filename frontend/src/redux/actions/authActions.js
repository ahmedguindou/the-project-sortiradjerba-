import { CLEARERRORS, FAIL, GET_CURRENT, LOGOUT, SIGNIN, SIGNUP } from "../types/authTypes"
import axios from "axios"
export const signup= (data,navigate)=> async (dispatch)=>{

    try {
        const res= await axios.post('/api/auth/SignUp',data)

        dispatch({type:SIGNUP, payload: res.data})// msg token user
        navigate('/profile')
    } catch (error) {
        dispatch({type:FAIL,  payload: error.response.data})//errors
    }


}

export const signin= (data,navigate)=> async(dispatch)=>{
try {
    const res= await axios.post('/api/auth/signIn',data)

    dispatch({type:SIGNIN, payload: res.data}) // msg token user
    navigate('/profile')
} catch (error) {
    dispatch({type:FAIL, payload: error.response.data}) // errors
}
}

export const getcurrent= ()=>async (dispatch)=>{

    const token = localStorage.getItem('token')

    const config= {
        headers: {
            authorization: token
        }
    }
    try {
        const res= await axios.get('/api/auth/me',config)

        dispatch({type:GET_CURRENT,payload:res.data})
        console.log(res.data)
    } catch (error) {
        dispatch({type:FAIL, payload: error.response.data})
    }
}

export const logout=()=>{

    return {type:LOGOUT}
}

export const clearErrors=()=>{

    return {type:CLEARERRORS}
}