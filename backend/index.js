import express from "express";
import { router } from "./routes/index.js";
const PORT = 3100 | process.env.PORT;
const app = express();
app.listen(PORT, () => console.log("server running in port :", PORT));
app.use("/", router);
