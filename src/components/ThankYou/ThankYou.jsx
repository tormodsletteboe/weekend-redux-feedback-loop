import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

//material ui import
import Button from '@mui/material/Button'

//when user clicks submit on the review page, user is taken to this ThankYou page, it has a thank you message and a button.
function ThankYou() {

    //used by the browser
    const history = useHistory();

    //used to reset redux store
    const dispatch = useDispatch();

    //user clicked the take new survey button, handle it
    const handleOnClick = ()=>{

        //reset the redux store
        dispatch({
            type:'RESET_STORE',
        })
        //go to the front page
        history.push('/');
    };
    return (

        <div>
            <h1>Thank you!</h1>
            <Button variant="contained" size="small" onClick={handleOnClick}>Take new survey</Button>
        </div>


    );
}
export default ThankYou;