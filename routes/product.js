const express = require ('express')
const { addProduct , deleteProduct , updateProduct , getOneProduct, getHotels, getRestaurants, getHouses, getThings } = require('../Controlls/productControlls');
const upload = require('../middlewares/upload');
const isAuth=require('../middlewares/isAuth');
const isAdmin = require('../middlewares/isAdmin');
const router = express.Router()

//add product
router.post('/',isAuth,isAdmin,upload.single('myImage'),addProduct);

//get all products
router.get('/hotels',getHotels)
router.get('/restaurants',getRestaurants)
router.get('/houses',getHouses)
router.get('/things',getThings)



//delete by id

router.delete("/:productId",deleteProduct)

//update 

router.put("/:productId",updateProduct)

// get one product

router.get("/:productId",getOneProduct)


module.exports=router;

