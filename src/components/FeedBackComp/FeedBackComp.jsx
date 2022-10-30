import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';

function FeedBackComp({ title, labelText, inputType, pushAddress, dispatchAddr, shelfname }) {

    const [feedBack, setFeedBack] = useState('0');

    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const shelfFromStore = useSelector((store) => store[shelfname]);

    useEffect(() => {
        setFeedBack(shelfFromStore);
    }, [params.id])

    const handleOnClick = () => {

        // evt.preventDefault();
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
        <Container maxWidth="sm">
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image='https://picsum.photos/200/200'
                    alt="happy girl in sunshine"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>{labelText}</Button>
                    <FormControl>
                        {inputType === 'text' ?
                            <TextField onChange={handleOnChange} type={inputType} value={feedBack} placeholder='...' />
                            : <TextField inputProps={{ inputMode: 'numeric', pattern: '^[0-6]$' }}
                                onChange={handleOnChange}
                                type={inputType}
                                value={feedBack}
                                required
                                min={0}
                                max={6}
                            />}
                        <Button variant="contained" size='small' onClick={handleOnClick} >NEXT</Button>
                    </FormControl>
                </CardActions>



            </Card>
        </Container>
    );
}
export default FeedBackComp;