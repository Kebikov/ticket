import './curentTicket.scss';
import { useContext, useState, useEffect } from 'react';
import { contextApp } from '../../app/App';
import { motion } from 'framer-motion';
import cub from '../../resource//img/oplati/cub.png';
import qr from '../../resource/img/ticket/qr.jpg';
import buss from '../../resource/img/ticket/buss.jpg';
import question from '../../resource/img/ticket/question.png';
import arrow from '../../resource/img/oplati/arr.png';
import down from '../../resource/img/ticket/down.jpg';

const CurrentTicket = ({active, onActive}) => {
    useEffect(() => {
        setHi(high);
    },[]);
    const [hi, setHi] = useState(null);

    const high = useContext(contextApp);
    

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
        <motion.div className='current-ticket' style={{top: `${hi}px`}} variants={meMotion} initial={'start'} animate={'end'}>
            <HeaderTicket onActive={onActive} />
            <div className="current-ticket__body">
                <div className="current-ticket__green">
                    <div className="current-ticket__green-body">
                        <img src={cub} alt="#" />
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
    const registrationPlate = '4115 ас';
    const numberBus = '103';
    const path = 'ДС \"Малиновка-4\" - ДС \"Юго-Запад\"';

    const dateEntity = new Date();
    const data = dateEntity.getDate();
    const month = dateEntity.getMonth() + 1;
    const year = dateEntity.getFullYear();
    const fullDate = `${data}.${month}.${year}`;
    const hours = dateEntity.getHours();
    const minutes = dateEntity.getMinutes();
    const currentTimeTicket = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

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
                    Рег.знак:<span>{registrationPlate}</span> A_№{numberBus} ({path}).
                </div>
                <div className="subinfo">
                    {/* box-1 */}
                    <div className="subinfo__box mergin">
                        <div className="subinfo__left">
                            <div className="subinfo__up-text">Номер ТС</div>
                            <div className="subinfo__down-text underline-text">{'0100' + numberBus}</div>
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
                            <div className="subinfo__down-text">{fullDate}</div>
                        </div>
                        <div className="subinfo__right">
                            <div className="subinfo__up-text">Время</div>
                            <div className="subinfo__down-text">{currentTimeTicket + ':00'}</div>
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