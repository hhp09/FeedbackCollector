# Feedback-Collector-App

A full stack application that sends mass email surveys and collects responses. The idea of the application is based on the course from Stephen Grider from Udemy.com (Node with React: Fullstack Web Development)

https://www.udemy.com/certificate/UC-Q718YKTN/

The application will require you to login with your Google account which is done securely using Passport's Google OAuth 2.0. The payment system implemented is in the form of credits using Stripe's API. A payment of $5 will yeild 5 credits. A survey campaign can then be sent out where ```one survey = one credit```.


### Tech Stack

Client (Front-end)
* Axios
* Create-React-App
* React 16
* Reactstrap
* Redux
* Redux Form
* Redux Thunk

Server (Back-end)
* Body Parser
* Concurrently
* Cookie-Session
* Express (Node.JS)
* Local Tunnel
* Lodash
* Mongoose
* Nodemon
* Passport (Google OAuth 2.0)
* Path Parser
* SendGrid
* Stripe

### Install
Run ```npm install``` to install all dependencies. To run the application, navigate to server directory and run ```npm run dev``` to start client and Express.js server concurrently.
Note: After forking this repository, API keys will be removed from Github. Make sure to add your keys to ```config/dev.js```







