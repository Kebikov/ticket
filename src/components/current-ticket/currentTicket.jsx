import './curentTicket.scss';
import { useEffect, useState } from 'react';
import cub from '../../resource//img/oplati/cub.png';
import qr from '../../resource/img/ticket/qr.jpg';
import buss from '../../resource/img/ticket/buss.jpg';

const CurrentTicket = ({active}) => {
    useEffect(() => {
        const header = document.querySelector('.header');
        const highHeader = header.offsetHeight;
        setHigh(highHeader);
    },[]);

    const [high, setHigh] = useState(10);

    return(
        <div className={active ? 'current-ticket active' : 'current-ticket'} style={{top: `${high}px`}}>
            <div className="current-ticket__body">
                <div className="current-ticket__green">
                    <div className="current-ticket__green-body">
                        <img src={cub} alt="#" />
                    </div>
                </div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentTicket;