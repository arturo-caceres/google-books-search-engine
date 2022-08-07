const fetchData = async (parameter) => {
    const api = 'https://www.googleapis.com/books/v1/volumes?q=';
    let queryString = parameter;
    const response = await fetch(`${api}${queryString}`);
    const data = await response.json();
    return data;
};

export default fetchData;
