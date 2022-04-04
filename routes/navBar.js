const express = require ('express');
const router = express.Router();

// home
router.get("/",(req,res)=>{
res.sendFile('../frontend/src/components/Home.js')
});

//hotels
router.get("/hotels",(req,res)=>{
    res.sendFile('../frontend/src/components/Hotels.js')
});

//restaurants
router.get("/restaurants",(req,res)=>{
    res.sendFile('../frontend/src/components/Restaurants.js')
});


//homes
router.get("/houses",(req,res)=>{
    res.sendFile('../frontend/src/components/Homes.js')
});


//things to do
router.get("/things to do",(req,res)=>{
    res.sendFile('../frontend/src/components/Thingstodo.js')
});

//login
router.get("/login",(req,res)=>{
    res.sendFile("../frontend/src/components/Login.js")
});


module.exports = router;