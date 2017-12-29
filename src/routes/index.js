import express from 'express'
import BookController from '../controllers/BookController'
import Validate from 'express-validation';
import {Rules} from '../models/book'
const Router   =   express.Router();

Router.get('/', (req,res)=>{
    res.send('Server is up!');
});

/*
return book by id
*/
Router.get('/book/:id', BookController.get);
/*
return all books
future plan:
pagination
*/
Router.get('/books', BookController.getAll);
/*
update book by id
return id
*/
Router.route('/book/:id').put([Validate(Rules.update)],BookController.update)
/*
add new book and
return book by id
*/
Router.route('/book').post([Validate(Rules.add)],BookController.add)
/*
delete book by id
return id
*/
Router.delete('/book/:id',  BookController.del);



export default Router;