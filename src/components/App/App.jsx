import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import FeedBackComp from '../FeedBackComp/FeedBackComp';

//router imports
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  function handleOnClick() {
    const testOjb = {
      feeling: 5,
      understanding: 2,
      support: 3,
      comments: 'ayayayayay'
    };
    postFeedBack(testOjb);
  }

  //local state
  const [feedBacks, setFeedBacks] = useState([]);
  //rbody.feeling,rbody.understanding,rbody.support,rbody.comments

  //call on load 
  useEffect(() => {
    getFeedBacks();
  }, []);



  //setup axis calls here GET and POST
  //POST ROUTE
  const postFeedBack = (feedBack) => {
    axios({
      method: 'POST',
      url: '/feedbacks',
      data: feedBack
    })
      .then((response) => {
        //TODO: I don't know if I need this might remove it later
        getFeedBacks();
      })
      .catch((error) => {
        console.error('POST /feedbacks is broken 😢', error);
      });
  };

  //GET ROUTE
  const getFeedBacks = () => {
    axios({
      method: 'GET',
      url: '/feedbacks',
    })
      .then((response) => {
        //TODO: might do dispatch here to the store
        setFeedBacks(response.data);

      })
      .catch((error) => {
        console.error('GET /feedbacks is broken 😢', error);
      })
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
          />
        </Route>
        <Route path="/understanding" exact>
          <FeedBackComp title='How well are you understanding the content?'
            labelText='Understanding?'
            inputType='number'
            pushAddress='/support'
            dispatchAddr='SET_UNDERSTANDING'
          />
        </Route>
        <Route path="/support" exact>
          <FeedBackComp title='How well are you being supported?'
            labelText='Support?'
            inputType='number'
            pushAddress='/comments'
            dispatchAddr='SET_SUPPORT'
          />
        </Route>
        <Route path="/comments" exact>
        <FeedBackComp title='Any comments you want to leave?'
            labelText='Comments'
            inputType='text'
            pushAddress='/review'
            dispatchAddr='SET_COMMENT'
          />
        </Route>
        <Route path="/review" exact>
        {/* TODO: */}
        </Route>
        <Route path="/admin" exact>
          {/* TODO:move this to a component */}
          <h1>review</h1>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>feeling</th>
                <th>understanding</th>
                <th>support</th>
                <th>comments</th>
                <th>flagged</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {feedBacks.map((feedback) => (
                <tr key={feedback.id}>
                  <td>{feedback.id}</td>
                  <td>{feedback.feeling}</td>
                  <td>{feedback.understanding}</td>
                  <td>{feedback.support}</td>
                  <td>{feedback.comments}</td>
                  <td>{feedback.flagged.toString()}</td>
                  <td>{feedback.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Route>
      </Router>
    </div>
  );
}

export default App;
