import express from "express";
import { validateRequestBody, Validators } from "../src";


const app = express();

app.use(express.json());


app.post("/username", validateRequestBody([
    {
        key: "username",
        validator: [Validators.rangeChar(6, 12)]
    }
]), (req,res) => {
    res.json({
        success: true
    })
})

app.post("/responsetest", validateRequestBody([
    {
        key: "test",
        validator: () => false,
        response: (res) => {
            res.status(400).json({success: false})
            
        }
    }
]), (req,res) => {
    res.json({
        success: true
    })
})

app.post("/response-option-test", validateRequestBody([
    {
        key: "test",
        validator: () => false,
        response: {
            message: "Invalid",
            statusCode: 400
        }
    }
]), (req,res) => {
    res.json({
        success: true
    })
})

export default app;
// app.listen(3000,() => console.log("APp listening to PORT 3000"));



