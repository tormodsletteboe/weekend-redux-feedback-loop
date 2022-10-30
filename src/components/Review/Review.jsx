import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { flexbox } from '@mui/system';

function Review({ sendDataToDataBase }) {
    const params = useParams();
    const store = useSelector((store) => store);
    const history = useHistory();
    // TODO: do I need use effect here?????
    // useEffect(() => {

    // }, [params.id]);


    const handleOnClick = () => {
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

        <Container maxWidth="sm">
            <Card sx={{ maxWidth: 345, margin: 'auto'}}>
                <CardMedia
                    component="img"
                    height="200"
                    image='https://picsum.photos/200/200'
                    alt="happy girl in sunshine"
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
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button variant='contained' size='small' onClick={handleOnClick}>Submit</Button>
                </CardActions>
            </Card>
        </Container>
    );
}
export default Review;