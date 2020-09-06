import React from 'react';
import { loadLocalImage } from 'utils/utils'

const Book = ({book}) => (
    <div className="book" >
        <div className="book__image">
            <img src={loadLocalImage(book.image)} alt={book.title} width={180} />
        </div>
        <div>
            <h3 className="book__title">
                {book.title}
            </h3>
            <div className="book__author">
                {book.author}
            </div>
            <div className="book__reviewed-by">
                {book.reviewedBy}
            </div>
        </div>
    </div>
);


export default Book;