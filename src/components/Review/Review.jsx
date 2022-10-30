import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'

//material ui imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'

//review page of,  feeling, understanding ,support and comment, submit button sends
// a feedback to database based on what is in the redux store
function Review({ sendDataToDataBase }) {

    // const params = useParams();

    //grab the whole store
    const store = useSelector((store) => store);

    //used to go to the next page
    const history = useHistory();

    // TODO: do I need use effect here?????
    // useEffect(() => {

    // }, [params.id]);

    // user clicked Submit, handle it.
    const handleOnClick = () => {
        //callback to app.jsx to send a feedback object to the database
        sendDataToDataBase({
            feeling: store.feeling,
            understanding: store.understanding,
            support: store.support,
            comments: store.comment
        });
        //go to the thank you page
        history.push('/thankyou');
    };
    return (

        <Container maxWidth="sm">
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image='https://picsum.photos/300/200'
                    alt="image from picsum website"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Feeling: {store.feeling}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Understanding: {store.understanding}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Support: {store.support}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Comment: {store.comment}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button variant='contained' size='small' onClick={handleOnClick}>Submit</Button>
                </CardActions>
            </Card>
        </Container>
    );
}
export default Review;