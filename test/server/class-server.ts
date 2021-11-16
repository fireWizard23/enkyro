import express from 'express';
import { validateRequestBody, MinCharValidation } from '../../src';


const app = express();

app.use(express.json())

app.post("/minchar", validateRequestBody([
    new MinCharValidation("test", 5, {
        message: "bad request"
    }),
]),(req, res) => {
    res.send("Successful")
})



export default app;


