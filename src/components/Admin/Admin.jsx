
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';

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

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
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
                        console.error('DELETE /feedbacks is broken 😢', error);
                    });
            }
        })


    };

    const flagFeedBack = (event) => {
        //basically gets the data-id property that was added to the table tr that the button that initiated this function call belongs to
        //button.    td.         tr
        const id = event.target.parentElement.parentElement.dataset.id;
        // console.log(tr.dataset.id);
        axios({
            method: 'PUT',
            url: `/feedbacks/${id}`
        })
            .then((response) => {
                console.log(response.data);
                //one was deleted get data again
                getFeedBacks(response.data);
            })
            .catch((error) => {
                console.error('PUT /feedbacks is broken 😢', error);
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
                        <td>{feedback.flagged.toString()}
                            <button onClick={flagFeedBack}>🇳🇴</button>
                        </td>
                        <td>
                             <DeleteIcon onClick={deleteFeedBack} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>


    );
}
export default Admin;