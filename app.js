const express = require ("express") ; 
const connectDB = require ('./config/db')
const authRoute = require ('./routes/auth')
const app = express();
require('dotenv').config()
const navbarRouter= require('./routes/navBar')



// connection database
connectDB(); 


//middleWares
app.use(express.json());
app.use("/api/auth" , authRoute);




//routes 
app.use('/api/navbar',navbarRouter)
app.use('/api/Product',require('./routes/product'))




const port = process.env.PORT || 5000 ; 
app.listen (port , ()=> console.log ( `server started on port ${port}`));

