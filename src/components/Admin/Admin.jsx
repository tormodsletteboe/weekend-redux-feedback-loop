
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Admin() {

    //local state
    const [feedBacks, setLocalFeedBacks] = useState([]);
    const params = useParams();

    useEffect(() => {

        getFeedBacks();

    }, [params.id]);

    //GET ROUTE
    const getFeedBacks = () => {
        axios({
            method: 'GET',
            url: '/feedbacks',
        })
            .then((response) => {
                setLocalFeedBacks(response.data);
            })
            .catch((error) => {
                console.error('GET /feedbacks is broken 😢', error);
            });
    };

    //delete route
    const deleteFeedBack = (event) => {
        //basically gets the data-id property that was added to the table tr that the button that initiated this function call belongs to
                         //button.    td.         tr
        const id = event.target.parentElement.parentElement.dataset.id;
        // console.log(tr.dataset.id);
        axios({
            method: 'DELETE',
            url: `/feedbacks/${id}`,
        })
            .then((response) => {
                console.log(response.data);
                //one was deleted get data again
                getFeedBacks(response.data);
            })
            .catch((error) => {
                console.error('GET /feedbacks is broken 😢', error);
            });
        
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>feeling</th>
                    <th>understanding</th>
                    <th>support</th>
                    <th>comments</th>
                    <th>flagged</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {feedBacks.map((feedback) => (
                    <tr key={feedback.id} data-id={feedback.id}>

                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                        <td>{feedback.flagged.toString()}</td>
                        <td>
                            <button onClick={deleteFeedBack} >💀</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>


    );
}
export default Admin;