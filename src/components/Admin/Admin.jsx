
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Admin() {

    //local state
    const [feedBacks, setLocalFeedBacks] = useState([]);
    const params = useParams();

    useEffect(() => {
        //GET ROUTE
        axios({
            method: 'GET',
            url: '/feedbacks',
        })
            .then((response) => {
                setLocalFeedBacks(response.data);
            })
            .catch((error) => {
                console.error('GET /feedbacks is broken 😢', error);
            })
    }, [params.id]);

    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>feeling</th>
                    <th>understanding</th>
                    <th>support</th>
                    <th>comments</th>
                    <th>flagged</th>
                    <th>date</th>
                </tr>
            </thead>
            <tbody>
                {feedBacks.map((feedback) => (
                    <tr key={feedback.id}>
                        <td>{feedback.id}</td>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                        <td>{feedback.flagged.toString()}</td>
                        <td>{feedback.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>


    );
}
export default Admin;