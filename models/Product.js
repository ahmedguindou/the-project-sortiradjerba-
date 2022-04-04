const mongoose=require('mongoose')
const schema = mongoose.Schema

const productSchema=new schema({
    nameProduct : {
        type:String,
        required : true
    },
    discProduct : {
        type:String,
        required : true
    },
    prixProduct : Number,
    imageUrl:{
        type:String,required:true
    },
    specialiste:{
        type:String
    }
})

module.exports=mongoose.model('Product',productSchema)