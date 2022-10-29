import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function ThankYou() {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleOnClick = ()=>{

        dispatch({
            type:'RESET_STORE',
        })
        history.push('/');
    };
    return (

        <div className="ReuseComp">
            <h1>Thank you!</h1>
            <button onClick={handleOnClick}>Take new survey</button>
        </div>


    );
}
export default ThankYou;