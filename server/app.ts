import dotenv from "dotenv";
import express from "express"; //step one: Import expresss framework after installation
import dns from "dns";

import mongoose from "mongoose"; // step-9: Import mongoose after installation to be able to connect mongoDB

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import cors from "cors";

const app = express(); // step-two: activate express and put in a container called app

dotenv.config();

const port = 2100; //step-three: Define the port number for server. dont use this same port number on your laptop.

app.use(cors()); // to enable cross-origin resource sharing

import taskRouter from "./routes/taskRouter"; // step-10: import the taskRouter file to be able to use the routes defined in the taskRouter file. this is the father route for all the routes defined in the taskRouter file. so all the routes defined in the taskRouter file will be prefixed with /api/task. for example, if we have a route defined in the taskRouter file as /create, then the full route will be /api/task/create. this is to avoid confusion and to make it easier to manage the routes in the server file.

app.use(express.json()); // to be able to send json data to the server from the client. this is a middleware that allows us to parse the json data sent from the client and make it available in the req.body object in the controller file. without this middleware, we will not be able to access the data sent from the client in the controller file. so this is a very important middleware to use when working with json data in the server file.

app.use("/api/task", taskRouter); // to be able to use the routes defined in the taskRouter file. this is the father route for all the routes defined in the taskRouter file. so all the routes defined in the taskRouter file will be prefixed with /api/task. for example, if we have a route defined in the taskRouter file as /create, then the full route will be /api/task/create. this is to avoid confusion and to make it easier to manage the routes in the server file.

// step-4: go to package.json under dcript and put "dev": nodeman app.ts allow npm run dev work

//step-6: connect to mongoDB
//step-7: to connect to mongodg first install mongoose
//step-8: listen to both database and server together

const start = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  console.log("Database connect successful");

  app.listen(port, () => {
    console.log(`server is running on PORT:${port}`);
  }); // Step-5 listen to the server after writing
};

start();

//user-name: dsunmibola_db_user
//password: EHXafHFflpFyw6I5
// mongodb+srv://dsunmibola_db_user:EHXafHFflpFyw6I5@cluster0.dl2ma3b.mongodb.net/?appName=Cluster0
// server file: this is where you run your sever and connect to your database ==> from app.js ==> the model file.
// model file: this is used to to define your data structure that will enter our database ==> from model.js ==> the controller file.
// controller file (business logic): this is used to define what happens between request and response ==> from controller.js ==> the route file.
// Route files: this defines the request type and route for that particular request type. from here back to the father ==> server file (app.js)

// other files includes: middleware files, utility files, configuration files, etc.

//CORS: this is a middleware that allows us to enable cross-origin resource sharing. this is used to allow the client to access the server from a different origin. for example, if the client is running on localhost:3000 and the server is running on localhost:2100, then we need to enable cors in the server file to allow the client to access the server. without enabling cors, we will get a cors error when trying to access the server from the client. so this is a very important middleware to use when working with a client and server that are running on different origins.

//AXIOS: this is a library that allows us to make HTTP requests from the client to the server. this is used to send data from the client to the server and to receive data from the server to the client. this is a very important library to use when working with a client and server that need to communicate with each other. without using axios or any other library to make HTTP requests, we will not be able to send data from the client to the server or receive data from the server to the client. so this is a very important library to use when working with a client and server that need to communicate with each other.
