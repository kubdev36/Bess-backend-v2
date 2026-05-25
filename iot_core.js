const cors = require("cors");
const express = require("express");
const app = express();
const data = require("./routes/data");
const dotenv = require("dotenv");
dotenv.config();
const PORT = 3001;

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

let host = ["http://127.0.0.1", "http://localhost", "http://192.168.1.4:8000", "http://bess2.local:8000", "http://bess2.local"];

app.use(
  cors({
    credentials: true,
    origin: host,
  }),
);

app.use("/data", data);


const server = require("http").createServer(app);
server.listen(PORT,'0.0.0.0' , () => {
  console.log(`Server is running on port ${PORT}`);
});
