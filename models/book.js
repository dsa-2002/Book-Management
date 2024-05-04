const mongoose = require('mongoose')

const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please provide title']
    },
    author:{
        type:String,
        required:[true,'Please provide author name']
    },
    publicationYear:{
        type:Number,
        required:[true,'Please provide publication year']
    }
});


module.exports=mongoose.model('Book',bookSchema);