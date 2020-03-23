const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const expressJwt = require("express-jwt");

const port = 9000;
const jwtSecret = Buffer.from("huy09876Na543Rylo21", "base64");

const app = express();
app.use(
  cors(),
  bodyParser.json(),
  expressJwt({
    secret: jwtSecret,
    credentialsRequired: false
  })
);
app.listen(port, () => console.info(`Server started on port ${port}`));
