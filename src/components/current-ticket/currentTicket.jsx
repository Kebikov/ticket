import './curentTicket.scss';
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import qr from '../../resource/img/ticket/qr.jpg';
import buss from '../../resource/img/ticket/buss.jpg';
import { dataContex } from '../oplati/oplati';

import video from '../../resource/img/ticket/1.mp4';

const CurrentTicket = ({active, onActive}) => {
    useEffect(() => {
        const bus = JSON.parse(localStorage.getItem('bus'));
        if(bus) {
            setInfo(bus);
        }
    },[]);
    const [info, setInfo] = useState({});
    const contex = useContext(dataContex);
    const {clientWindowsSize} = contex.size;

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

const bodyTicket = (total) => {
    const arr = [];
    let num = +total;
    for(let i = num; i > 0; i = i - 1) {
        arr.push(
            <div className={num === 1 ? "current-ticket__body" : "current-ticket__body mb"} key={i}>
                <div className="current-ticket__green">
                    <div className="current-ticket__green-body">
                        <video src={video} width="140px" height="#" autoPlay={true} loop muted ></video>
                    </div>
                </div>
                <WhiteBox/>
            </div>
        );
    }
    return arr;
}

    return(
        <>
            <motion.div className='current-ticket' variants={meMotion} initial={'start'} animate={'end'} style={{height: `${clientWindowsSize}px`}}>
                <div className="div-for-margin"></div>
                {bodyTicket(info.total)}
            </motion.div>
        </>
    )
}


const WhiteBox = () => {
    useEffect(() => {
        const bus = JSON.parse(localStorage.getItem('bus'));
        if(bus) {
            setInfoTicket(bus);
        }
    },[]);
    const [infoTicket, setInfoTicket] = useState({});

    return(
        <div className="white-box">
            <div className="white-box__body">
                <div className="white-box__title">??????????</div>
                <div className="white-box__sub-title">?????????????????????????????? ?????????????????????? "????????????????????"</div>
                <div className="white-box__qr">
                    <img src={qr} alt="#" />
                </div>
                <div className="white-box__buss">
                    <img src={buss} alt="#" />
                </div>
                <div className="white-box__info">
                    ??????.????????:<span>{infoTicket?.regNumber}</span>. A_???{infoTicket?.bus} ({infoTicket?.path}).
                </div>
                <div className="subinfo">
                    {/* box-1 */}
                    <div className="subinfo__box mergin">
                        <div className="subinfo__left">
                            <div className="subinfo__up-text">?????????? ????</div>
                            <div className="subinfo__down-text underline-text">{infoTicket?.tsNumber}</div>
                        </div>
                        <div className="subinfo__right">
                            <div className="subinfo__up-text">?????????? ????????????</div>
                            <div className="subinfo__down-text">ES017013989</div>
                        </div>
                    </div>
                    {/* box-2 */}
                    <div className="subinfo__box">
                        <div className="subinfo__left">
                            <div className="subinfo__up-text">???????? ??????????????</div>
                            <div className="subinfo__down-text">{infoTicket?.fullDate}</div>
                        </div>
                        <div className="subinfo__right">
                            <div className="subinfo__up-text">??????????</div>
                            <div className="subinfo__down-text">{infoTicket?.currentTimeTicket}</div>
                        </div>
                    </div>
                </div>
                <div className="bill">
                    0,85<span> BYN</span>
                    <div className="bill__down-text">??????????????</div>
                </div>
            </div>
        </div>
    )
}
export default CurrentTicket;


