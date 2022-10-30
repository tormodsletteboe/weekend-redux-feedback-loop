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
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

const ranges = [
    {
        value: '0',
        label: 'Bad-0',
    },
    {
        value: '1',
        label: 'OK-1',
    },
    {
        value: '2',
        label: 'Good-2',
    },
    {
        value: '3',
        label: 'Better-3',
    },
    {
        value: '4',
        label: 'Nice-4',
    },
    {
        value: '5',
        label: 'WOW!-5',
    },
    {
        value: '6',
        label: 'DUDE!!-6',
    },
];

function FeedBackComp({ title, labelText, inputType, pushAddress, dispatchAddr, shelfname }) {

    const [feedBack, setFeedBack] = useState('');
    

    

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
                <CardActions sx={{ justifyContent: 'space-evenly' }}>

                    {inputType === 'text' ?
                        <TextField onChange={handleOnChange} type={inputType} value={feedBack} placeholder='leave a comment ...' ></TextField>
                        : <TextField  helperText='..'
                            onChange={handleOnChange}
                            value={feedBack}
                            label="Select"
                            select
                        >
                            {ranges.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        }
                    {inputType === 'text' ? <Button variant="contained" size='large' onClick={handleOnClick} >NEXT</Button> :
                        <Button style={{ marginBottom: 24 }} variant="contained" size='large' onClick={handleOnClick} >NEXT</Button>}
                    
                </CardActions>
            </Card>
        </Container>
    );
}
export default FeedBackComp;