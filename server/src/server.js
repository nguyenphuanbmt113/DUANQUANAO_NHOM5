import cors from "cors";
import express from "express";
import dbConnect from "./config/connectDB";
import initRoutes from "./route";
require("dotenv").config();
const app = express();
dbConnect();
app.use(cors());
app.post(
    "/api/v1/webhook",
    express.json({
        verify: (request, response, buf) => {
            request.rawBody = buf.toString();
        },
    })
);

app.use(express.json());

//đọc đc data object
app.use(express.urlencoded({ extended: true }));

//set route
initRoutes(app);

const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
    console.log(`Server is running on the port ${listener.address().port}`);
});
