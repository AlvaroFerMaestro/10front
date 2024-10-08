require("dotenv").config();
const express = require ("express");
const { connectDB } = require("./src/config/db");
const eventosRouter = require("./src/api/routes/eventos");
const usersRouter = require("./src/api/routes/user");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/v1/eventos", eventosRouter);
app.use("/api/v1/users", usersRouter);

app.use("*", (req, res, next) =>{
    return res.status(400).json("Route Not Found");
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
});



