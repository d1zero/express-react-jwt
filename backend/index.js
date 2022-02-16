const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { PORT } = require("./config");
const mongoose = require("mongoose");
const router = require("./src/routes/index.routes");
const errorMiddleware = require("./src/middlewares/error.middleware");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: config.CLIENT_URL }));
app.use(cookieParser());

app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
    await mongoose.connect("mongodb://localhost:27017/");
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
    try {
    } catch (error) {
        console.log(error);
    }
};

start();
