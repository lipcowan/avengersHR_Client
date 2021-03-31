# Avengers HR Portal

## About
An expense management system for avenger members, all members can submit expense claims to then be reviewed my managing members of the team. 

## Tech Stack

#### Frontend
- JavaScript
  * w/ jQuery
- HTML5
- CSS3
  * w/ Bootstrap 4

#### Backend
_[Repo Link](https://github.com/lipcowan/avengersHR_backend)_
- GCP SQL
  * PostgreSQL
- Java
  * Javalin (Server)
  * jUnit (testing)
  * Mockito (testing)
  * JDBC
  * 0Auth JWT

## Features
- Managers
  * Add expense
  * Approve expense
  * Deny expense
  * Provide comments
- Members
  * Add expense
  * Provide details

#### _ToDo_
- Deploy to frontend to firebase hosting and backend to gcp compute engine
- Add file upload option for receipt photos

## Want to use this project? -> How to get started ...
- [_set up a server using the avengers tower backend repo, or use your own backend_](https://github.com/lipcowan/avengersHR_backend)
- clone this repo locally
  - git clone https://github.com/lipcowan/avengersHR_Client.git <local project folder name - optional>
  - _no npm install needed since the dependencies are added in html script tags_
- Run locally or host on [firebase](https://firebase.google.com/docs/hosting) or [github pages](https://pages.github.com/)



