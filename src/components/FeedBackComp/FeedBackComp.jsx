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
        label: '0 - Bad',
    },
    {
        value: '1',
        label: '1 - OK',
    },
    {
        value: '2',
        label: '2 - Good',
    },
    {
        value: '3',
        label: '3 - Better',
    },
    {
        value: '4',
        label: '4 - Nice',
    },
    {
        value: '5',
        label: '5 - WOW!',
    },
    {
        value: '6',
        label: '6 - DUDE!!',
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
                    src='https://picsum.photos/400/500'
                    alt="picture of earth coast from space station"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-evenly' }}>

                    {inputType === 'text' ?
                        <TextField onChange={handleOnChange} type={inputType} value={feedBack} placeholder='leave a comment ...' ></TextField>
                        : <TextField  helperText='Choose a value 0 - 6'
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