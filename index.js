const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const bikesRoutes = require("./routes/bikes-routes");
const HttpError = require("./models/http-error");

const seedDB = require("./seeds");

const app = express();

seedDB();

app.use(bodyParser.json());

// set the CORS headers in the res before routing the the req
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/bikes", bikesRoutes);

// unsupported routes
app.use((req, res, next) => {
  throw new HttpError("Could not find this route.", 404);
});

// default error handler
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

mongoose
  .connect(
    `mongodb+srv://high-trails:gxUmr1jAkBguKEWf@high-trails.rpfci.mongodb.net/high-trails?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("High Trails server running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
