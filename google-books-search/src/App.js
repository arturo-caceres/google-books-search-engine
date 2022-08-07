import './App.css';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form';
import Header from './Components/Header/Header';
import fetchData from './Components/BookData/API';

function App() {
    return (
        <div className="App">
            <Header />
            <Form />

            <Footer />
        </div>
    );
}

export default App;
