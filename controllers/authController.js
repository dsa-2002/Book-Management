require("dotenv").config()

const User=require('../models/user');

const {StatusCodes} = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors')
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs')

const register= async(req,res)=>{

    try{

    const {username,email,password}= req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User({username,password:hashedPassword,email});
    await user.save();
    
    res.status(StatusCodes.CREATED).json({message:'User registered successfully',token})
    

    }
    catch(err){
        console.log('Internal server error',err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:err.message});

    }


}


const login=async(req,res)=>{

    try {
        
        const {username,email,password}=req.body;
    
        if(!email || !password || !username){
            throw new BadRequestError('Please provide email and password')
        }
        const user=await User.findOne({username});
        if(!user){
          throw new UnauthenticatedError('Invalid Credentials')
        }
    
        const isPasswordCorrect = await bcrpy.compare(password,user.password);
    
    
        if(!isPasswordCorrect){
            throw new UnauthenticatedError('Invalid Credentials')
        }
    
        const token = jwt.sign({userId:user._id},config.jwtSecret,{expiresIn:'24h'});
    
        res.satus(StatusCodes.OK).json({token});
    } 
    
    catch (error) {
          
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:error.message});
    }


}


module.exports = {
    register,
    login,
  }
  