# Typescript for Beginners

This project was created to help a basic understanding of Typescript superset, where we apply in practice how it works in NodeJS and ReactJS languages.

To simplify understanding, decide to separate into two folders between backend and front. Well let's start with the backend folder.

## BackEnd - NodeJS
In this project I created an api using express, where it returns a list of users and post method that at the end sends an email to the user.

The packages that have been used are:

- Express
  - Responsible for creating the server, and because we are using the typescript with the main superset, the library recommends that we put the package: @types/express as a dependency, where you can access intellisense

- Cors
  - It is a node.js package to provide a Connect / Express middleware that can be used to enable CORS with various options. Where the frontend can access the services provided by the application

- Typescript
  - The TypeScript language appears as a superset of JavaScript, adding to it features that are not natively available or require great effort to use, such as data typing and Object Orientation

- ts-node-dev
  - It restarts target node process when any of required files changes but shares Typescript compilation process between restarts.

## FrontEnd

In this project I created, I ended up consuming an api that we made in the backend project, which returns a list of users.

The packages that have been used are:

- Create React App - CRA
  - The CRA is responsible for creating a development template for ReactJS where the community created a way to build an initial setup using typescript 'yarn create react-app front --template=typescript'

- Axios
  - Axios is a Promises-based HTTP client for making requests. It can be used in browser and Node.js.