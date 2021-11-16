import express from "express";
import { validateRequestBody, Validators } from "../src";


const app = express();

app.use(express.json());


app.post("/", validateRequestBody([
    {
        key: "test",
        validator: Validators.rangeNumber(5, 20)
    }
]), (req,res) => {
    res.send("Valid")
})




export default app;
// app.listen(3000,() => console.log("APp listening to PORT 3000"));



