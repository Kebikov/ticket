import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState} from 'react';
import StartPage from "../components/start-page/start-page";
import Oplati from '../components/oplati/oplati';
import InputData from '../components/input-data/input-data';
import Header from '../components/header/Header';

function App() {
    useEffect(() => {
        
    },[]);

    return (
        <BrowserRouter>
                <div className="wrapper">
                    <Header/>
                    <Routes>
                        <Route path='/' element={<StartPage/>} />
                        <Route path='oplati' element={<Oplati/>} />
                        <Route path='input' element={<InputData/>} />
                    </Routes>
                </div>
        </BrowserRouter>
    );
}

export default App;

