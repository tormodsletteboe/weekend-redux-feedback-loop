
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Feeling</TableCell>
                        <TableCell align="center">Understanding</TableCell>
                        <TableCell align="center">Support</TableCell>
                        <TableCell align="center">Comments</TableCell>
                        <TableCell align="center">Flagged</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedBacks.map((feedback) => (
                        <TableRow key={feedback.id} data-id={feedback.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                            <TableCell align="center">{feedback.feeling}</TableCell>
                            <TableCell align="center">{feedback.understanding}</TableCell>
                            <TableCell align="center">{feedback.support}</TableCell>
                            <TableCell align="center">{feedback.comments}</TableCell>
                            <TableCell align="center">
                                <Button variant="contained" size="small" onClick={flagFeedBack} endIcon={<FlagIcon />}>{feedback.flagged.toString()}</Button>
                            </TableCell>
                            <TableCell align="center">
                                <Button variant="contained" size="small" onClick={deleteFeedBack} endIcon={<DeleteIcon />}>DELETE</Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>


    );
}
export default Admin;