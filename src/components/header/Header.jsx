import './header.scss';
import info from '../../resource/img/oplati/info.jpg';

const Header = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const currentTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return(
        <div className="header">
            <div className="header__body">
                <div className="header__time">{currentTime}</div>
                <div className="header__info">
                    <img src={info} alt="#" />
                </div>
            </div>
        </div>
    )
}

export default Header;