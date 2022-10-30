
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

// start material UI imports
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
// end material UI imports

//Admin
// Admin page loads feedbacks from a database and displays them in a table
function Admin() {

    //local state
    const [ feedBacks, setLocalFeedBacks ] = useState( [] );
    const params = useParams();

    // on load
    useEffect( () => {
        getFeedBacks();
    }, [ params.id ]);

    //GET ROUTE, get all the feedbacks from the database and pass them to the local state
    const getFeedBacks = () => {
        axios({
            method: 'GET',
            url: '/feedbacks',
        })
            .then( ( response ) => {
                setLocalFeedBacks( response.data );
            })
            .catch( ( error ) => {
                console.error( 'GET /feedbacks is broken 😢' , error);
            });
    };

    //delete route, go to the database and delete feedback based on the given id. axios call is rapped inside a sweetalert2
    const deleteFeedBack = ( event ) => {

        //verify if user is sure
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( ( result ) => {
            //if user confirms they are sure, call the axios delete
            if ( result.isConfirmed ) {
                //TODO: the parentElement chain breaks when user clicks on icon on the button
                //basically gets the data-id property that was added to the table tr that the button that initiated this function call belongs to
                //button.    td.         tr
                const id = event.target.parentElement.parentElement.dataset.id;
               
                //send message to database to delete row
                axios({
                    method: 'DELETE',
                    url: `/feedbacks/${id}`,
                })
                    .then((response) => {
                        //one was deleted get data again from the database
                        getFeedBacks();
                    })
                    .catch((error) => {
                        console.error('DELETE /feedbacks is broken 😢', error);
                    });
            }
        })


    };

    //user clicked the Flag button in the table, send a PUT message to the database to flip the boolean of row with id
    const flagFeedBack = (event) => {
        //basically gets the data-id property that was added to the table tr that the button that initiated this function call belongs to
        //button.    td.         tr
        const id = event.target.parentElement.parentElement.dataset.id;
        axios({
            method: 'PUT',
            url: `/feedbacks/${id}`
        })
            .then((response) => {
                //one was updated get data again
                getFeedBacks();
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
                    {/* iterate through all the feedbacks and creat table row for each with cells containing data */}
                    {feedBacks.map((feedback) => (
                        <TableRow key={feedback.id} data-id={feedback.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center">{feedback.feeling}</TableCell>
                            <TableCell align="center">{feedback.understanding}</TableCell>
                            <TableCell align="center">{feedback.support}</TableCell>
                            <TableCell align="center">{feedback.comments}</TableCell>
                            <TableCell align="center">
                                {/* {TODO: the icons causes an issue when clicked, since tr is no longer parent.parent} */}
                                {/* conditional rendering, use icon if flagged is true, otherwise use text on button */}
                                {feedback.flagged ? <Button variant="contained"
                                    size="small"
                                    onClick={flagFeedBack}
                                    endIcon={<FlagIcon />}>
                                </Button> :
                                    <Button variant="contained"
                                        size="small"
                                        onClick={flagFeedBack}> {feedback.flagged.toString()}
                                    </Button>
                                }
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