
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();



import usersRoutes from "./routes/users.js";

app.use (bodyParser.json());
app.use (cors());

app.use('/users',usersRoutes )

app.get("/", (req, res) => res.send("Welcome yogapriya"));




app.listen(8080, () => {
  console.log('App listening on port 8080')
});

