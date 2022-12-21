import './curentTicket.scss';
import { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cub from '../../resource//img/oplati/cub.png';
import qr from '../../resource/img/ticket/qr.jpg';
import buss from '../../resource/img/ticket/buss.jpg';
import question from '../../resource/img/ticket/question.png';
import arrow from '../../resource/img/oplati/arr.png';
import down from '../../resource/img/ticket/down.jpg';
import video from '../../resource/img/ticket/1.mp4';

const CurrentTicket = ({active, onActive}) => {
    
    const meMotion = {
        start: {
            x: '100%'
        },
        end: {
            x: active ? 0 : '100%',
            transition: {
                duration: .7
            }
        }
    }

    return(
        <motion.div className='current-ticket' variants={meMotion} initial={'start'} animate={'end'}>
            <HeaderTicket onActive={onActive} />
            <div className="current-ticket__body">
                <div className="current-ticket__green">
                    <div className="current-ticket__green-body">
                        <video src={video} width="140px" height="#" autoPlay={true} loop muted ></video>
                    </div>
                </div>
                <WhiteBox/>
            </div>
            <img className='down-ticket' src={down} alt="#" />
        </motion.div>
    )
}

const HeaderTicket = ({onActive}) => {


    return(
        <div className="header-ticket">
            <div className="header-ticket__body">
                <div className="header-ticket__left" onClick={onActive}>
                    <img src={arrow} alt="#" />
                    <div className="header-ticket__text">Мои билеты</div>
                </div>
                <img className="header-ticket__question" src={question} alt="#" />
            </div>
        </div>
    )
}

const WhiteBox = () => {
    useEffect(() => {
        const bus = JSON.parse(localStorage.getItem('bus'));
        console.log('CurrentTicket',bus);
        console.log('',bus.bus[0]);
        setInfoTicket(bus);
    },[]);
    const [infoTicket, setInfoTicket] = useState({});

    console.log('info',infoTicket.busNumber);

    const x = '000';

    return(
        <div className="white-box">
            <div className="white-box__body">
                <div className="white-box__title">Минск</div>
                <div className="white-box__sub-title">Государственное предприятие "Минсктранс"</div>
                <div className="white-box__qr">
                    <img src={qr} alt="#" />
                </div>
                <div className="white-box__buss">
                    <img src={buss} alt="#" />
                </div>
                <div className="white-box__info">
                    Рег.знак:<span>{infoTicket.regNumber}</span>. A_№{infoTicket.busNumber} ({infoTicket.path}).
                </div>
                <div className="subinfo">
                    {/* box-1 */}
                    <div className="subinfo__box mergin">
                        <div className="subinfo__left">
                            <div className="subinfo__up-text">Номер ТС</div>
                            <div className="subinfo__down-text underline-text">{infoTicket.tsNumber}</div>
                        </div>
                        <div className="subinfo__right">
                            <div className="subinfo__up-text">Номер билета</div>
                            <div className="subinfo__down-text">ES017013989</div>
                        </div>
                    </div>
                    {/* box-2 */}
                    <div className="subinfo__box">
                        <div className="subinfo__left">
                            <div className="subinfo__up-text">Дата покупки</div>
                            <div className="subinfo__down-text">{infoTicket.fullDate}</div>
                        </div>
                        <div className="subinfo__right">
                            <div className="subinfo__up-text">Время</div>
                            <div className="subinfo__down-text">{infoTicket.currentTimeTicket}</div>
                        </div>
                    </div>
                </div>
                <div className="bill">
                    0,85<span> BYN</span>
                    <div className="bill__down-text">Разовый</div>
                </div>
            </div>
        </div>
    )
}
export default CurrentTicket;