import React from 'react';
import styles from './Book.module.scss';

//Each book in the grid should have an image, author, title and description

const Book = ({ img, title, author, description }) => {
    console.log(img, title, author, description);

    return (
        <div className={styles.book}>
            <img className={styles.book__img} src={img} alt="" />
            <div className={styles.book__box}>
                <h2 className={styles.book__box__title}>Title: {title} </h2>
                <h3 className={styles.book__box__author}>Author: {author} </h3>
                <p className={styles.book__box__desc}>
                    Description: {description}{' '}
                </p>
            </div>
        </div>
    );
};

export default Book;
