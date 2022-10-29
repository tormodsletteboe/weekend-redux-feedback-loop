import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Review() {
    const params = useParams();
    const store = useSelector((store)=>store);

    useEffect(() => {

    }, [params.id]);

    return (
        <div>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <button>Submit</button>
        </div>
    );
}
export default Review;