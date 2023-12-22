import express, { urlencoded } from "express";
import { router } from "./routes/index.js";
import { db } from "./config/mongoose.js";

const PORT = 3100 | process.env.PORT;
const app = express();
app.listen(PORT, () => console.log("server running in port :", PORT));
//set up url encoded
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
