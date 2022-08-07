import './App.css';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form';
import Header from './Components/Header/Header';
import fetchData from './Components/BookData/API';
import { useEffect } from 'react';

console.log(fetchData('harry'));

function App() {
    useEffect(() => {
        const wrapper = async () => {
            console.log(await fetchData('harry'));
        };

        wrapper();
    }, []);

    return (
        <div className="App">
            <Header />
            <Form />
            {/* {JSON.stringify(books)} */}
            <Footer />
        </div>
    );
}

export default App;
