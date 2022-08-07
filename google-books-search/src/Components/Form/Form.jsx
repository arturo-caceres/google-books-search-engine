import { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => setSearch(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(search);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    placeholder="Search for your book"
                    onChange={handleChange}
                />
                <button>Search</button>
            </form>
        </div>
    );
};

export default Form;
