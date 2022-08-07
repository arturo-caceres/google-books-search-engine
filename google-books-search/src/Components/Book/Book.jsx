import React from 'react';

//Each book in the grid should have an image, author, title and description

const Book = ({ img, title, author, description }) => {
    console.log(img, title, author, description);

    return (
        <div>
            <img src={img} alt="" />
            <h2>Title: {title} </h2>
            <h3>Author: {author} </h3>
            <p>Description: {description} </p>
        </div>
    );
};

export default Book;
