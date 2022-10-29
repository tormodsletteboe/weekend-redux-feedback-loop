const express = require('express');
const bodyParser = require('body-parser');


const app = express();



/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
 const feedBackRouter = require('./routes/feedback.router.js');
 app.use('/feedbacks',feedBackRouter);


/** ---------- START SERVER ---------- **/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});