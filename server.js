const express = require("express");

const app = express();

const midd = (req, res, next) => {
  const dateTod = new Date().getDay();
  const hours = new Date().getHours();
  if (dateTod >= 1 && dateTod < 6 && hours >= 9 && hours <= 17) {
    console.log("we are opne");
    next();
  } else {
    res.send("<h1>We Are Closed</h1>");
  }
};
app.use(midd);

app.use(express.static("pages"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is Running at ${PORT}`)
);
