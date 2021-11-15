import express from "express";
import { validateRequestBody, Validators } from "../src";


const app = express();

app.use(express.json());







export default app;
// app.listen(3000,() => console.log("APp listening to PORT 3000"));



