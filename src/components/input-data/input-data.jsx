import './input-data.scss';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import imgOplati from '../../resource/img/ticket/unnamed.jpg';

const InputData = () => {
    const navigate = useNavigate();

    const goToBack = () => navigate(-1);


    return(
        <Formik
        initialValues = {{
            bus: '147',
            path:'home',
            tsNumber:'',
            regNumber:'',
            total:'1'
        }}
        onSubmit = {value => {

            const handlePath = (num, pathHome, pathMetro) => {
                if(value.bus === num) {
                    if(value.path === 'home') {
                        value.path = pathHome;
                    }else if(value.path === 'metro') {
                        value.path = pathMetro;
                    }
                }
            }

            localStorage.clear();
            const dateEntity = new Date();
            const data = dateEntity.getDate();
            const month = dateEntity.getMonth() + 1;
            const year = dateEntity.getFullYear();
            const fullDate = `${data < 10 ? '0' + data : data}.${month < 10 ? '0' + month : month}.${year}`;
            const hours = dateEntity.getHours();
            const minutes = dateEntity.getMinutes();
            const currentTimeTicket = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
            value['fullDate'] = fullDate;
            value['currentTimeTicket'] = currentTimeTicket + ':00';

            console.log('',value);
            if(value.regNumber[4] !== ' ') {
                let newNumber = value.regNumber.slice(0,4) + ' ' + value.regNumber.slice(4,6);
                value.regNumber = newNumber;
            }

            //* маршруты автобусов
            handlePath('147','Брилевичи - ДС "Малиновка-4"', 'ДС "Малиновка-4" - Брилевичи');
            handlePath('103', 'ДС "Юго-Запад" - ДС "Малиновка-4"','ДС "Малиновка-4" - ДС "Юго-Запад"');
            handlePath('32c', 'ДС "Дружная" - ДС "Малиновка-4"','ДС "Малиновка-4" - ДС "Дружная"');

            const busJson = JSON.stringify(value, null,2);
            console.log('',busJson);
            localStorage.setItem('bus', busJson);
            navigate(-1);
        }}
        >
            <Form className="form" >
                <div className="input-img" onClick={goToBack} >
                    <img src={imgOplati} alt="" />
                </div>
                <div className="block-all">
                    <div className="section">Выбор автобуса</div>
                    <div className="radio-group-bus">
                        <Bus num={'147'} />
                        <Bus num={'103'} />
                        <Bus num={'32c'} />
                    </div>
                    <div className="section">Направление</div>
                    {/* radio */}
                    <div className="radio-group-path" >
                        <label className="label-radio">
                            <Field 
                                type="radio" 
                                name="path"
                                value="home"
                                className="radio"
                            />
                            Домой
                        </label>
                        <label className="label-radio">
                            <Field  
                                type="radio" 
                                name="path"
                                value="metro" 
                                className="radio"
                            />
                            Метро
                        </label>
                    </div>
                    <div className="section">Количество билетов</div>
                    <RadioDroupTotalTicket/>
                    <div className="section">Ввод данных</div>
                </div>
                {/* input */}
                <label htmlFor="ts" className='label'>TC:</label>
                <Field
                    className='input'
                    id="tsNumber"
                    name="tsNumber"
                    type="text"
                    autoComplete="off"
                />
                {/* input */}
                <label htmlFor="regNumber" className='label mu-20'>Рег.знак:</label>
                <Field
                    className='input'
                    id="regNumber"
                    name="regNumber"
                    type="text"
                    autoComplete="off"
                />
                <button className='button' type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

const Bus = ({num}) => {
    return(
            <label className="label-radio">
                <Field 
                    type="radio" 
                    name="bus"
                    value={num + ''}
                    className="radio"
                />
                {num}
            </label>
    )
}

const RadioDroupTotalTicket = () => {
    return(
        <div className="radio-group-path" >
            <label className="label-radio">
                <Field 
                    type="radio" 
                    name="total"
                    value="1"
                    className="radio"
                />
                Один
            </label>
            <label className="label-radio">
                <Field  
                    type="radio" 
                    name="total"
                    value="2" 
                    className="radio"
                />
                Два
            </label>
        </div>
    )
}

export default InputData;

