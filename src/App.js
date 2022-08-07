import styles from './App.module.scss';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form';
import Header from './Components/Header/Header';
import fetchData from './Components/BookData/API';
import { useState, useEffect } from 'react';
import Book from './Components/Book/Book';

function App() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const result = await fetchData(search);
            const books = result.items;
            setBooks(books);
        };

        if (search !== '') {
            wrapper();
        }
    }, [search]);

    return (
        <div className="App">
            <Header />
            <Form onSubmit={setSearch} />

            <div className={styles.main__box}>
                {books.map((book, i) => {
                    console.log(book.volumeInfo.imageLinks);
                    return (
                        <Book
                            key={i}
                            img={
                                book.volumeInfo.imageLinks &&
                                book.volumeInfo.imageLinks.thumbnail
                            }
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                        />
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}

export default App;

// max-width: 1280px;
//     display: flex;
//     margin: 0 auto;
//     flex-wrap: wrap;
//     justify-content: center;
