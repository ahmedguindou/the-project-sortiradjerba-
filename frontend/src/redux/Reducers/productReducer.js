import { GET_ALL_HOTELS,GET_ALL_HOUSES,GET_ALL_THINGS, GET_ALL_RESTAURANTS, GET_ONE_PRODUCT, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/addTypes";


const initState={
    hotels : [],
    restaurants:[],
    houses:[],
    things:[],
    product:{},
    loading : true,
    edit:false
}

const productReducer=(state=initState, action)=>{
    switch (action.type) {
        case GET_ALL_HOTELS:
            return {...state, hotels:action.payload, loading:false}
        case GET_ALL_RESTAURANTS:
            return {...state, restaurants:action.payload, loading:false}
        case GET_ALL_HOUSES:
            return {...state,houses:action.payload , loading:false}
        case GET_ALL_THINGS:
            return {...state,things:action.payload , loading:false}
        case TOGGLE_TRUE:
            return {...state, edit:true}
        case TOGGLE_FALSE:
            return {...state, edit:false}
        case GET_ONE_PRODUCT:
            return {...state, product:action.payload, loading : false}
        default:
           return state;
    }
}

export default productReducer