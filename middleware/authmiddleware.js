require('dotenv').config()
const jwt = require('jsonwebtoken');
const StatusCodes=require('http-status-codes')
module.exports= (req,res,next)=>{

    const token= req.headers.authorization;
    if(!token){
        return res.status(StatusCodes.UNAUTHORIZED).json({message:'Unauthorized'});
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
        if(err){
            res.status(StatusCodes.UNAUTHORIZED).json({
                message:'Unauthorized'
            })
        }
        req.userId=decodedToken.userId;
        next();
    });
};