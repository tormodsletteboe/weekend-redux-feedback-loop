const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//get feedbacks from database '/'
router.get('/',(req,res)=>{
    let queryText = `
        SELECT * FROM "feedback"
    ;`;
    pool.query(queryText)
        .then((dbRes)=>{
            res.send(dbRes.rows);
        })
        .catch((error)=>{
            console.error('error in router GET pool query',error);
            res.sendStatus(500);
        });

});

//get specific feedback from database '/:id'

//posts feedback to database '/'
router.post('/',(req,res)=>{
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    let rbody = req.body;
    let queryParams =[rbody.feeling,rbody.understanding,rbody.support,rbody.comments];
    pool.query(queryText,queryParams)
        .then((dbRes)=>{
            res.sendStatus(201);
        })
        .catch((error)=>{
            console.error('error in router POST pool query',error);
            res.sendStatus(500);
        });
});

module.exports = router;

