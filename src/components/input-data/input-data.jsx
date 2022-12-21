import './input-data.scss';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const InputData = () => {
    const navigate = useNavigate();

    return(
        <Formik
        initialValues = {{
            bus: '',
            path:'',
            tsNumber:'',
            regNumber:''
        }}
        onSubmit = {value => {
            localStorage.clear();
            const dateEntity = new Date();
            const data = dateEntity.getDate();
            const month = dateEntity.getMonth() + 1;
            const year = dateEntity.getFullYear();
            const fullDate = `${data}.${month}.${year}`;
            const hours = dateEntity.getHours();
            const minutes = dateEntity.getMinutes();
            const currentTimeTicket = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
            value['fullDate'] = fullDate;
            value['currentTimeTicket'] = currentTimeTicket + ':00';

            console.log('',value);
            if(value.bus[0] === '147') {
                if(value.path === 'home') {
                    value.path = 'Брилевичи - ДС "Малиновка-4"'
                }else if(value.path === 'metro') {
                    value.path = 'ДС "Малиновка-4" - Брилевичи'
                }
            }
            value['busNumber'] = value.bus[0];
            const busJson = JSON.stringify(value, null,2);
            console.log('',busJson);
            localStorage.setItem('bus', busJson);
            navigate(-1);
        }}
        >
            <Form className="form" >
                <div className="block-147">
                    {/* checkbox */}
                    <label className="checkbox">
                        <Field
                            name="bus" 
                            type="checkbox"
                            value="147"
                        />
                        147
                    </label>
                    {/* radio */}
                    <div className="radio-group-path">
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
                </div>
                {/* input */}
                <label htmlFor="ts" className='label'>TC:</label>
                <Field
                    className='input'
                    id="tsNumber"
                    name="tsNumber"
                    type="text"
                />
                {/* input */}
                <label htmlFor="regNumber" className='label'>Рег.знак:</label>
                <Field
                    className='input'
                    id="regNumber"
                    name="regNumber"
                    type="text"
                />
                <button className='button' type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default InputData;

