const Book = require("../models/Book");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const createBook = async (req, res) => {
  try {
    const { title, author, publicationYear } = req.body;
    if (!title || !author || !publicationYear) {
      res.json("Please provide title,author,publicationYear");
    }
    const book = new Book({ title, author, publicationYear });
    await book.save();
    res.status(StatusCodes.CREATED).json(book);
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

const getBooksByAuthor = async (req, res) => {
  try {
    const { author } = req.params;
    const books = await Book.find({ author });
    res.status(StatusCodes.OK).json(books);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};


const getBooksByPublicationYear = async(req,res)=>{
    try {
           const {publicationYear}=req.params;
           const books=await Book.find({publicationYear});
           res.status(StatusCodes.OK).json(books)
    } catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:err.message});
    }
}


const updateBook=async(req,res)=>{
    try {
        const {id}=req.params;
        await Book.findByIdAndUpdate(id);
        res.status(StatusCodes.OK).json({message:'Book updated successfully'})
    } catch (err) {
         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:err.message});
    }
}

const deleteBook = async(req,res)=>{
    try {
        const {id}=req.params;
       const deleBook =  await Book.findByIdAndDelete(id);
       if(!deleBook){
        throw new NotFoundError(`No Book with id ${id}`)
       }
       res.status(StatusCodes.OK).json({message:'Book deleted successfully'});
    } catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:err.message});
    }
}


module.exports={
    createBook,getAllBooks,getBooksByAuthor,getBooksByPublicationYear,deleteBook,updateBook

}