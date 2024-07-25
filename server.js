const express =  require('express');
require('dotenv/config');
const userRouter = require('./routes/userRoute');
const connectDB = require('./config/db.js');
const app = express();
app.use(express.json());
connectDB();
app.use('/user',userRouter);


app.get('/' , (req,res)=> {
    res.send("Hello world !");
})

const PORT = process.env.PORT||8080;
app.listen(PORT , ()=> {
  console.log(`server is running at port ${PORT}`);
})

// filter and search , pagination