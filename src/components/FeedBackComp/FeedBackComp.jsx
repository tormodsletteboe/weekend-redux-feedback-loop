import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FeedBackComp({ title, labelText, inputType, pushAddress, dispatchAddr, shelfname }) {

    const [feedBack, setFeedBack] = useState(-1);

    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const shelfFromStore = useSelector((store) => store[shelfname]);

    useEffect(() => {
        setFeedBack(shelfFromStore);
    }, [params.id])

    const handleOnClick = () => {
        // console.log(feedBack);
        dispatch({
            type: dispatchAddr,
            payload: feedBack
        })
        history.push(pushAddress);
    }
    const handleOnChange = (event) => {
        setFeedBack(event.target.value);
    };

    return (
        <div className="ReuseComp">
            <h1>{title}</h1>
            <label>{labelText}</label>
            {inputType === 'text' ?
                <input onChange={handleOnChange} type={inputType} value={feedBack} />
                : <input onChange={handleOnChange} type={inputType} value={feedBack} required />}

            <button onClick={handleOnClick}>NEXT</button>
        </div>
    );
}
export default FeedBackComp;