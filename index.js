// any computer program that listen and waiting for any other computer
// lf4d listening to / sharing player movement

// middleware
// enemyProfile
// auth

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import messageRouter from "./src/message/router.js";
const app = express();

console.log(process.env.DB_URI);

// API routes
// relationship with DB
// credentials
// making sure server stays awake

mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("Error connecting to DB");
    } else {
      console.log("Connected to DB");

      app.use(express.json());

      app.use(function (req, res, next) {
        console.log(req.method, req.url, req.body);
        next();
      });

      app.use("/message", messageRouter);

      app.get("/hello", function (req, res) {
        res.send("hello world");
      });

      app.listen(8000, () => console.log("server listening on port 8000"));
    }
  }
);

// // every computer program talks to other computer programs (thru API)
// bluetooth headphones
// talk to the bluetooth radio attached to your motherboard
// windows operating system talks to bluetooth radio
// sound card and windows talk to each other
// discord talks to windows
