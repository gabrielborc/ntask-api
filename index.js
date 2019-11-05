import express from "express";
import consign  from "consign";

const app = express();

consign()
    .include("libs/config.js")
    .then("conn/db.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);