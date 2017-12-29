import Joi from 'joi';
class Book {
    constructor(title, description, ISBN, author, publication_date, genre, price) {
        this.title = title;
        this.description = description;
        this.ISBN = ISBN;
        this.author = author;
        this.publication_date = publication_date;
        this.genre = genre;
        this.price = price;
    }
    get() {
        return {
            title: this.title,
            description: this.description,
            ISBN: this.ISBN,
            author: this.author,
            publication_date: this.publication_date,
            genre: this.genre,
            price: this.price
        }
    }
}
const Rules = {
    add: {
        body: {
            title: Joi.string().required(),
            description: Joi.string().required(),
            publication_date: Joi.date().required(),
            author: Joi.string().required(),
            ISBN: Joi.string().required(),
            genre: Joi.string().required(),
            price: Joi.number().required()
        }
    },
    update: {
        body: {
            title: Joi.string(),
            description: Joi.string(),
            publication_date: Joi.date(),
            author: Joi.string(),
            ISBN: Joi.string(),
            genre: Joi.string(),
            price: Joi.number()
        }
    }

}
export {
    Book,
    Rules
};