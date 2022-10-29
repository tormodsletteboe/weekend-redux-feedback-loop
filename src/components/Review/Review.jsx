import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { useParams,useHistory } from 'react-router-dom'


function Review({sendDataToDataBase}) {
    const params = useParams();
    const store = useSelector((store)=>store);
    const history = useHistory();
    // TODO: do I need use effect here?????
    // useEffect(() => {

    // }, [params.id]);


    const handleOnClick = ()=>{
        // TODO: send to database
        sendDataToDataBase({
            feeling: store.feeling,
            understanding: store.understanding,
            support: store.support,
            comments: store.comment
        });
        history.push('/thankyou');
    };
    return (
        <div>
            <h1>Feeling: {store.feeling}</h1>
            <h1>Understanding: {store.understanding}</h1>
            <h1>Support: {store.support}</h1>
            <h1>Comment: {store.comment}</h1>
            <button onClick={handleOnClick}>Submit</button>
        </div>
    );
}
export default Review;