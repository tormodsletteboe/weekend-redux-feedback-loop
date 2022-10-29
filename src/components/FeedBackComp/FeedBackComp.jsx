import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
function FeedBackComp({title,labelText,inputType,pushAddress,dispatchAddr}){
    
    const [feedBack,setFeedBack] = useState(-1);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleOnClick = ()=>{
        dispatch({
            type: dispatchAddr,
            payload:feedBack
        })
        history.push(pushAddress);
    }
    const handleOnChange = (event)=>{
        setFeedBack(event.target.value);
    };

    return(
        <div className="ReuseComp">
            <h1>{title}</h1>
            <label>{labelText}</label>
            <input onChange={handleOnChange} type={inputType} value ={feedBack} />
            <button onClick={handleOnClick}>NEXT</button>
        </div>
    );
}
export default FeedBackComp;