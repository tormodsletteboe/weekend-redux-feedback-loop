import React from 'react';
import axios from 'axios';
import './App.css';

import FeedBackComp from '../FeedBackComp/FeedBackComp';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import ThankYou from '../ThankYou/ThankYou';
//router imports
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  //setup axios calls here POST, GET is in the Admin.jsx page
  //POST ROUTE
  const postFeedBack = (feedBack) => {
    console.log(feedBack.comments);
    axios({
      method: 'POST',
      url: '/feedbacks',
      data: feedBack
    })
      .then((response) => {
        //no need to call getFeedBacks here, will call it when admin page loads
        console.log(response.data);
      })
      .catch((error) => {
        console.error('POST /feedbacks is broken 😢', error);
      });
  };



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          <FeedBackComp title='How are you feeling today?'
            labelText='Feeling?'
            inputType='number'
            pushAddress='/understanding'
            dispatchAddr='SET_FEELING'
            shelfname='feeling'
          />
        </Route>
        <Route path="/understanding" exact>
          <FeedBackComp title='How well are you understanding the content?'
            labelText='Understanding?'
            inputType='number'
            pushAddress='/support'
            dispatchAddr='SET_UNDERSTANDING'
            shelfname='understanding'
          />
        </Route>
        <Route path="/support" exact>
          <FeedBackComp title='How well are you being supported?'
            labelText='Support?'
            inputType='number'
            pushAddress='/comments'
            dispatchAddr='SET_SUPPORT'
            shelfname='support'
          />
        </Route>
        <Route path="/comments" exact>
          <FeedBackComp title='Any comments you want to leave?'
            labelText='Comments'
            inputType='text'
            pushAddress='/review'
            dispatchAddr='SET_COMMENT'
            shelfname='comment'
          />
        </Route>
        <Route path="/review" exact>
          <Review sendDataToDataBase={postFeedBack} />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/thankyou" exact>
          <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;
