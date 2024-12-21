const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const dotenv = require("dotenv");
dotenv.config();
const Port = process.env.PORT || 5000;
const app = express();

//internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/common/errorHandler");

//connect mongodb
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("database connect success !"))
  .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//cookie Parser
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//error handling
app.use(notFoundHandler);
app.use(errorHandler);

//listening server
app.listen(Port, () => console.log(`listening Port on: ${Port}`));
