
const express=require('express');
const bodyParser = require('body-parser')
const connectDB = require('./db/connect');
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
const config = require('./config/config');


const app=express();

app.use(bodyParser.json());

const PORT=process.env.PORT ||5000;

app.use('/auth',authRoutes)
app.use('/books',bookRoutes)
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();