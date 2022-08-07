import { useState } from 'react';
import styles from './Form.module.scss';

const Form = ({ onSubmit }) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => setSearch(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(search);
    };

    return (
        <div className={styles.form}>
            <form className={styles.form__main} onSubmit={handleSubmit}>
                <input
                    className={styles.form__main__input}
                    type="text"
                    value={search}
                    placeholder="Find your book"
                    onChange={handleChange}
                />
                <button className={styles.form__main__button}>Search</button>
            </form>
        </div>
    );
};

export default Form;
