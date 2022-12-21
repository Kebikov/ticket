import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, useContext, createContext } from 'react';
import StartPage from "../components/start-page/start-page";
import Oplati from '../components/oplati/oplati';
import InputData from '../components/input-data/input-data';

const contextApp = createContext({});
const { Provider } = contextApp;

function App() {
    useEffect(() => {
        // const header = document.querySelector('.header__body');
        // const highHeader = header.getBoundingClientRect().bottom;
        // setHigh(highHeader);
    },[]);

    const [high, setHigh] = useState(null);

    return (
        <BrowserRouter>
            <Provider value={high}>
                <div className="wrapper">
                    <Routes>
                        <Route path='/' element={<StartPage/>} />
                        <Route path='oplati' element={<Oplati/>} />
                        <Route path='input' element={<InputData/>} />
                    </Routes>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
export {contextApp};
