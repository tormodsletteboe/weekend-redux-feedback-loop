


![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Feedback App

## Description

_Duration: 2 Day Sprint_

The Feedback app helps give feedback about how the day of learning went.
 Simply choose a feeling 0-Bad, 6-Excellent. Click Next, then choose how well understood the material covered was. Click Next and select how supported one felt. Click Next and leave a comment. Clicking Next will then take the user to a Review page. The user can then review the choices made, and click Submit, or go back and edit a choice. After clicking submit the user will be presented with a Thank You page with the option to take the survey again.

The feedback survey submitted by the user will be sent to a database. An admin user can review all feedbacks by going to the Admin page. The admin user can Flag a feedback for further review. Feedbacks can also be deleted. An "Are you sure" dialog box will appear before a feedback is permanently deleted.
 


## Screen Shot

![Screenshot](GalleryUI.jpeg)




### Prerequisites

Link to software that is required to develop this website.

- [javascript](https://www.javascript.com/)
- [css]
- [html]
- [git](https://git-scm.com/)
- [github](https://github.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [pg](https://node-postgres.com/)
- [react](https://reactjs.org/)
- [redux](https://redux.js.org/)
- [axios](https://axios-http.com/)
- [express](https://expressjs.com/)
- [sql](https://www.mysql.com/)
- [sweetalerts2](https://sweetalert2.github.io/)

## Installation


1. Go to https://github.com/tormodsletteboe/weekend-redux-feedback-loop
2. Fork that repo into your own github account.
3. Copy the ssh address
4. In your terminal navigate to a folder you want to clone into.
5. Run `git clone [ssh address]` in your terminal
6. cd into the cloned folder and run `code .` in your terminal to open the project in vscode.
7. Run 'npm install'. Npm will look at your dependecies and install needed libraries.
8. Install postgress database using include database.sql file
    -  in termial execute  'createdb prime_feedback' and 
    -  'psql -d prime_feedback -f data.sql'
9. To start, execute in 2 separate terminals, 'npm run server' and 'npm run client'.
10. If it started, terminal will display 'server is up on port 5000', and a website on localhost 3000 will open.
11. You can now enjoy this Feedback app.

## Usage


1. Select a feeling based on 0-Bad and 6-Excellent, Click Next
2. Select an understanding based on 0-Bad and 6-Excellent, Click Next.
3. Select a support rating based on 0-Bad and 6-Excellent, Click Next.
4. Leave a comment, Click Next.
5. Review choices and..
    - Click submit if all looks good
    or
    - Click back on browser to edit a selection
6. A Thank you page will be displayed after submitting a feedback.
    - All done,
     or
    - User can choose to take the survey again.
    





## Built With

javascript, css, html, git and github.com, body-parser, pg, sql, react, sweetalerts2, express, axios, redux


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped us to make this application a reality. (Edan Schwartz, Kris Szafranski)

## Support
If you have suggestions or issues, please email me at [tormod.slettebo@gmail.com] 

