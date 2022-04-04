const Product = require('../models/Product')


//addproudct

exports.addProduct=async(req,res)=>{
    const  {nameProduct,discProduct,prixProduct,specialiste}=req.body;
    const file=req.file
    if(!file){
        return res.status(400).send({errors:[{msg:"image is required"}]})
    }
    try {
        const product= new Product({
            nameProduct,discProduct,prixProduct,imageUrl:file.filename,specialiste
        })
            await product.save()
            res.send({msg : "product added",product})
    } catch (error) {
        res.status(500).send('error server')
    }
}


//getHotels
exports.getHotels=async(req,res)=>{
    
    try {
        const products=await Product.find({specialiste:"hotels"})
        res.send(products)
    } catch (error) {
        res.status(500).send('error server')

    }
}

//getRestaurants
exports.getRestaurants=async(req,res)=>{
    
    try {
        const products=await Product.find({specialiste:"restaurants"})
        res.send(products)
    } catch (error) {
        res.status(500).send('error server')

    }
}

//getHouses
exports.getHouses=async(req,res)=>{
    
    try {
        const products=await Product.find({specialiste:"houses"})
        res.send(products)
    } catch (error) {
        res.status(500).send('error server')

    }
}

//getThings
exports.getThings=async(req,res)=>{
    
    try {
        const products=await Product.find({specialiste:"things"})
        res.send(products)
    } catch (error) {
        res.status(500).send('error server')

    }
}

//deleteproduct
exports.deleteProduct=async(req,res)=>{
    const {productId}=req.params
    try {
        await Product.findByIdAndDelete(productId)
        res.send('product deleted')
    } catch (error) {
        res.status(500).send('error server')
    }
}


//updateproduct
exports.updateProduct=async(req,res)=>{
    const {productId}=req.params
    try {
        await Product.findByIdAndUpdate(productId,{$set:{...req.body}})
        res.send('product updated')
    } catch (error) {
        res.status(500).send('error server')
    }
}


//getoneproduct
exports.getOneProduct=async(req,res)=>{
    const {productId}=req.params
    try {
        const product =await Product.findById(productId)
        res.send(product)
    } catch (error) {
        res.status(500).send('error server')
    }
}