import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config();
import route from "./routes/UserRoutes.js"
const app = express();

app.use(bodyParser.json());
app.use("/api/user", route)

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(()=>{
        console.log("Database is connected ");
        app.listen(PORT , ()=>console.log(`port is live on ${PORT}`));
    })
    .catch((err)=>{
        console.log("the error happen in mongobd", err);
    })
