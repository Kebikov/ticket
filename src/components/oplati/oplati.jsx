import './oplati.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useContext, createContext, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import CurrentTicket from '../current-ticket/currentTicket';
import Header from '../header/Header';
import cashBox from '../../resource/img/oplati/cash-box.jpg';
import eye from '../../resource/img/oplati/eye.png';
import plus from '../../resource/img/oplati/plus.png';
import line from '../../resource/img/oplati/line.png';
import qr from '../../resource/img/oplati/qr.png';
import two from '../../resource/img/oplati/two-line.png';
import arrow from '../../resource/img/oplati/arrow.png';
import mini from '../../resource/img/oplati/mini-beck.jpg';
import gear from '../../resource/img/oplati/gear.png';
import arrRight from '../../resource/img/oplati/arr.png';
import card from '../../resource/img/oplati/card.png';
import ticket from '../../resource/img/oplati/ticket.png';
import rec from '../../resource/img/oplati/rec.jpg';
import footer from '../../resource/img/oplati/footer.jpg';

const dataMy = createContext({});

//=Oplati
const Oplati = () => {
    const [active, setActive] = useState(false);

    const onActive = () => {
        setActive(item => !item);
    }

    const {Provider} = dataMy;

    const meMotion ={
        start: {
            x: 0
        },
        end: {
            x: active ? '-100%' : 0,
            transition: {
                duration: .7
            }
        }
    }

    return(
        <>
            <Provider value={onActive}>
                <Header/>
                <CurrentTicket active={active} onActive={onActive} />
                <motion.div className='oplati' variants={meMotion} initial={'start'} animate={'end'} >
                    <Body />
                    <Footer/>
                </motion.div>
            </Provider>
        </>
    )
}

//=Body
const Body = () => {
    return(
        <div className="body-oplati" >
            <HeaderOplati/>
            <Main/>
            <Service/>
            <TicketBlock/>
            <Rec/>
        </div>
    )
}

const HeaderOplati = () => {
    return(
        <div className="header-oplati">
            <div className="header-oplati__body">
                <div className="header-oplati__left">
                    <img src={cashBox} alt="#" />
                    <div className="header-oplati__text">Оплати</div>
                </div>
                <div className="header-oplati__avatar"><span>E</span></div>
            </div>
        </div>
    )
}

const Main = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return(
        <>
            <div className="main">
                <div className="main__body">
                    <div className="main__columns">
                        <div className="main__up">
                            <div className="main__up-text">Основной</div>
                            <div className="main__dots">...</div>
                        </div>
                        <div className="main__cash">
                            <img src={eye} alt="#" />
                            <div className="main__cash-text">2,5<span>byn</span></div>
                        </div>
                        <div className="main__icon">
                            <div className="main__box">
                                <img src={arrow} alt="" width={'90px'} />
                                <div className="main__icon-text">Платежи</div>
                            </div>
                            <div className="main__box">
                                <img src={plus} alt="" width={'90px'} />
                                <div className="main__icon-text">Пополнить</div>
                            </div>
                            <div className="main__box">
                                <img src={two} alt="" width={'90px'} />
                                <div className="main__icon-text">Переводы</div>
                            </div>
                            <div className="main__box">
                                <img src={line} alt="" width={'90px'} />
                                <div className="main__icon-text">Выписка</div>
                            </div>
                        </div>
                        <div className="main_qr">
                            <div className="main_qr-boby" onClick={goBack}>
                                <img src={qr} alt="#" width={'30px'} />
                                <div className="main_qr-text">qr для оплаты</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mini-back">
                <img src={mini} alt="#" />
            </div>
        </>
    )
}

const Service = () => {
    return(
        <div className="service">
            <div className="service__body">
                <div className="service__text">Сервисы</div>
                <img src={gear} alt="#" />
            </div>
        </div>
    )
}

const TicketBlock = () => {
    const contextMy = useContext(dataMy);

    return(
        <div className="ticket-block">
            <div className="ticket-block__body">
                <div className="ticket-block__up">
                    <div className="ticket-block__ticket" onClick={() => contextMy()} >
                        <img src={ticket} alt="#" />
                        <div className="ticket-block__tecket-text" >Билеты</div>
                    </div>
                    <div className="ticket-block__pay">
                        <div className="ticket-block__pay-text">Купить</div>
                    </div>
                </div>
                <div className="ticket-block__down">
                    <div className="ticket-block__down-body">
                        <div className="ticket-block__down-left">
                            <img className="ticket-block_img-card" src={card} alt="#" />
                            <div className="ticket-block__down-text">Карты лояльности</div>
                        </div>
                        <img className="ticket-block_img-arrow" src={arrRight} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Rec = () => {
    return(
        <img className="rec" src={rec} alt="#" />
    )
}

const Footer = () => {
    return(
        <div className="footer">
            <img src={footer} alt="#" />
        </div>
    )
}

export default Oplati;
