import './start-page.scss';
import finger from '../../resource/img/start-page/fingerprint.png';
import fullScreen from '../../utils/fullScreen';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {

    const exitFullScreen = () => {
        document.webkitExitFullscreen();
    }

    const navigate = useNavigate();

    const goToOplati = () => {
        setTimeout(() => {
            navigate('/oplati');
        }, 500);
    }

    const goToInput = () => {
        navigate('/input');
    }

    return(
            <div className="start">
                <div className="start__body">
                    <div className="start__pin roboto">Введите PIN</div>
                    <div className="start__bio roboto">или используйте биометрические данные</div>
                    <div className="start__dash">
                        <div className="start__dash-body">
                            <div className="start__line"/>
                            <div className="start__line"/>
                            <div className="start__line"/>
                            <div className="start__line"/>
                            <div className="start__line"/>
                            <div className="start__line"/>
                        </div>
                    </div>
                    <div className="start__numbers">
                        <div className="start__numbers-body">
                            <div className="start__one roboto">1</div>
                            <div className="start__one roboto">2</div>
                            <div className="start__one roboto">3</div>
                        </div>
                    </div>
                    <div className="start__popup popup">
                        <div className="popup__body">
                            <div className="popup__line">
                                <div className="popup__line-left roboto" onClick={goToInput} ><span>Fingerprint</span></div>
                                <div className="popup__line-right roboto">Face</div>
                            </div>
                            <div className="popup__autor roboto">Авторизация</div>
                            <div className="popup__sub-autor roboto">по биометрическим данным</div>
                            <div className="popup__text roboto">Используйте биометрические данные<br/>для входа или подтверждения операции</div>
                            <div className="popup__abolition roboto" onClick={exitFullScreen}>Отменить</div>
                        </div>
                    </div>
                    <div className="finger">
                        <div className="finger__body" onClick={goToOplati} >
                            <img src={finger} alt="#" />
                        </div>
                    </div>
                    <div className="down"  onClick={fullScreen} >
                        <div className="down__body">
                            <div className="down__left roboto">отменить</div>
                            <div className="down__right roboto">забыли pin?</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default StartPage;


