const fetchData = async (parameter) => {
    const api = 'https://www.googleapis.com/books/v1/volumes';
    let query = `?q=${parameter}`;
    const response = await fetch(`${api}${query}`);
    const data = await response.json();
    return data;
};

export default fetchData;
