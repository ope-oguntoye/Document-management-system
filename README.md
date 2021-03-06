### Document Management System API (DMSys)

[![Build Status](https://travis-ci.org/framky007/Document-management-system.svg?branch=develop)](https://travis-ci.org/framky007/Document-management-system)
[![Coverage Status](https://coveralls.io/repos/github/framky007/Document-management-system/badge.svg?branch=develop)](https://coveralls.io/github/framky007/Document-management-system?branch=develop)
[![Code Climate](https://codeclimate.com/github/framky007/Document-management-system/badges/gpa.svg)](https://codeclimate.com/github/framky007/Document-management-system)

----
## Description
 **`DMSys`** is a document manager system that exposes endpoints using RESTful API.

## Features
*  It has the following features:
   *  Login - Login into the application using email address, password.
   *  Signup - Signup into the application by providing Username, password and email address
   *  Search for documents - Search for documents by title.
   *  Search for users - Search for users by username
   *  Create documents - Creates documents with the attributes provided
   *  Delete documents or users - Delete documents or Users.  You can only delete a document you created
   *  Update documents or users - Updates documents or user attributes
   *  create roles - Create new roles
   *  update roles - Update existing roles
* The API Documentation can be found at [here](https://dmsys.herokuapp.com)

## Technology
*  This project uses a host of modern technologies. The core ones are:
   *  ECMAScript 6: Also known as ES2015, this is the newest version of Javascript with next-generation features like arrow functions, generators, enhanced object literals,spread operators and more. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for details.

   *  NodeJS: NodeJS is a server-side JavaScript runtime engine built on Chrome's V8 JavaScript engine. It is lightweight, efficient and greatly used in building web apps. Please visit [this link](https://nodejs.org) for more details.

   *  Sequelize:  Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more. visit [this link](http://docs.sequelizejs.com) for more details.


## Installation and Setup
*  Navigate to a directory using your favourite `terminal`.
*  Clone this repository to that directory.
  *  Using SSH;
    `$ git clone git@github.com:framky007/Document-management-system.git`

  *  Using HTTP;
    `$ git clone https://github.com/framky007/Document-management-system.git`

*  Navigate to the repo's directory
  *  `$ cd document management system` or the folder where you cloned the repo into
*  Install the app's dependencies
  *  `$ npm install`
*  Run the app
  * `$ npm start`

## Tests
*  The tests were written using Supertest, Chai.
*  The test coverage is generated by `gulp-istanbul` package
*  To run tests, navigate to the project's root directory
*  Run the following commands.
  *  `$ npm test`

## Contribute

If you are interested in contributing to development of DMSys, follow the instructions below to contribute.

- Fork the repository

- Make your change

- Commit your change to your forked repository

- Provide a detailed commit description

- Create a pull request


# FAQs

* Do I need to pay to use the APIs ?

  * No, its free for everyone.

* How do I connect to the APIs?

  * There are 4 Http verbs used in this API - GET, DELETE, PUT and POST. This represents the most commonly used actions -   Create, Read, Update and Delete (CRUD).
 Please click **[here](https://dmsys.herokuapp.com)** for more information

* What return formats do you support?

  * DMSYS APIs currently returns data in ```JSON``` format.

* What kind of authentication is required?

  * All endpints except login and signup are protected. Users requre ```token``` to access all protected endpoints.
A ```Token``` is sent to client after successful signup and login.
The Token must be set as authorization in the ```http request header``` in subsequent request(s) to access the protected routes

## Limitations
The application uses a free plan of shared database, which has a maximum size of 20mb and cannot process more than 5 concurrent connections at a time.

## License
This project is authored by [Ajaps Franklin]() and is licensed
for your use, modification, and distribution under [the MIT license](https://en.wikipedia.org/wiki/MIT_License).
