import express from "express";
import { validateRequestBody, Validators } from "../src";


const app = express();

app.use(express.json());


app.post("/", validateRequestBody([
    {
        key: "t",
        validator: Validators.min(5)
    }
]))




export default app;
// app.listen(3000,() => console.log("APp listening to PORT 3000"));



