const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user")
const questionRoute = require("./routes/question") 

dotenv.config();
const app = express();

//Ket noi den MongoDB ThanhThuan - My-Project
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Connected to MONGO_DB")
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Routes
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/q", questionRoute);


app.listen(8000, () => {
    console.log("Server is running...")
})


//Authentication - so sanh du lieu - User.js
//Authorization - phan quyen