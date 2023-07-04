require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");


const app = express();
app.use(express.json());
app.use(cookieParser());

const logger = require("./app/config/logger");
const connectDB = require('./app/config/database')

const port = process.env.PORT;

//logger
app.use((req, res, next) => {
  logger.info(req.body);
  
  let oldSend = res.send;
  res.send = function (data) {
    logger.info(JSON.stringify(data));
    oldSend.apply(res, arguments);
  }
  next();
})


const userRoute = require("./app/routes/user")
const userProfile = require('./app/routes/userProfile')
const banner = require('./app/routes/banner')

app.use('/uploads', express.static('uploads'))

app.use("/user", userRoute)
app.use('/user-profile', userProfile);
app.use('/banner', banner)



app.listen(port, () => {
  connectDB();
  console.log(`server is up and running on port ${port}`);
  // logger.info(`server is up and running on ${port}`); --- we can check in server.log file
});
