const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./database/db')
const userRoute=require('./routes/userRoutes')
const tikcetRoute=require('./routes/ticketRoutes')
const cors=require('cors')
const app=express();
dotenv.config()
// connect database file
connectDB();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
//user route
app.use('/api/user',userRoute)
app.use('/api/ticket',tikcetRoute)
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>console.log(`server is running on port ${PORT}` ))