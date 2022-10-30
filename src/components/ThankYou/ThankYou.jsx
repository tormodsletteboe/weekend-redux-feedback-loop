import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Button from '@mui/material/Button'

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
            <Button variant="contained" size="small" onClick={handleOnClick}>Take new survey</Button>
        </div>


    );
}
export default ThankYou;