import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//material ui imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

//menu item values used in the dropdown when Textfield is a numeric type
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

//reused for the first 4 pages , feeling, understanding, support, comment
function FeedBackComp({ title, inputType, pushAddress, dispatchAddr, shelfname }) {

    //feedback is based on shelfname, the selector uses the shelfname key to grab the correct "shelf" from the redux store
    const [feedBack, setFeedBack] = useState('');
    

    
    //used by the browser
    const history = useHistory();

    // used to send msg to redux store
    const dispatch = useDispatch();

    //TODO:used by the browser to know where to go when user edits the url with keyboard???? maybe not sure
    const params = useParams();

    //use shelfname key to grab correct feedback value
    const shelfFromStore = useSelector((store) => store[shelfname]);

    //on load
    useEffect(() => {
        setFeedBack(shelfFromStore);
    }, [params.id])

    //when user clicks NEXT
    const handleOnClick = () => {
        //send data to redux store
        dispatch({
            type: dispatchAddr,
            payload: feedBack
        })
        //go to next page
        history.push(pushAddress);
    }

    //set the current local state feedback value
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
                    {/* conditional render, if input is text type, its the comment page, otherwise its one of the others feeling/understanding/support */}
                    {inputType === 'text' ?
                        <TextField onChange={handleOnChange} type={inputType} value={feedBack} placeholder='leave a comment ...' ></TextField>
                        : <TextField  helperText='Choose a value 0 - 6'
                            onChange={handleOnChange}
                            value={feedBack}
                            label="Select"
                            select
                        >
                            {/* add the values Bad, OK .... DUDE!! etc with corresponding numbers */}
                            {ranges.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        }
                        {/* just a conditional render to make the button align with textfield when there is helpertext, ie marginBottom 24 */}
                    {inputType === 'text' ? <Button variant="contained" size='large' onClick={handleOnClick} >NEXT</Button> :
                        <Button style={{ marginBottom: 24 }} variant="contained" size='large' onClick={handleOnClick} >NEXT</Button>}
                    
                </CardActions>
            </Card>
        </Container>
    );
}
export default FeedBackComp;