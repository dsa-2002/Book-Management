const express=require('express');
const router=express.Router();

const {    createBook,getAllBooks,getBooksByAuthor,getBooksByPublicationYear,deleteBook,updateBook}=require('../controllers/bookController');


router.post('/',authMiddleware,createBook);
router.get('/',authMiddleware,getAllBooks);
router.get('/author/:authorname',authMiddleware,getBooksByAuthor);
router.get('/publicationYear/:publicationYear',authMiddleware,getBooksByPublicationYear);
router.put(':/id',authMiddleware,updateBook);
router.delete(':/id',authMiddleware,deleteBook)


module.exports=router;