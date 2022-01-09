import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="card-container">
            <img src="https://media.istockphoto.com/photos/antique-leather-book-cover-picture-id173946498?k=20&m=173946498&s=612x612&w=0&h=Aexzkkd0JS5hZLvF2dfLWOTxPoeu2e-pYjtagNCqTzc=" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    )
};

export default BookCard;