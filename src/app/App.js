import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from "../components/start-page/start-page";
import Oplati from '../components/oplati/oplati';

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Routes>
                    <Route path='/' element={<StartPage/>} />
                    <Route path='oplati' element={<Oplati/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
