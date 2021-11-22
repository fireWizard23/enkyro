import express from 'express';
import { validateRequestBody, MinCharValidation , validateRequestHeaders, Validators} from '../../src';


const app = express();

app.use(express.json())

app.post("/minchar", validateRequestBody([
    new MinCharValidation("test", 5, {
        message: "bad request"
    }),
]),(req, res) => {
    res.send("Successful")
})

app.get("/minheaders", validateRequestHeaders(
    [
        {
            key: "authorization",
            validator: [ Validators.notNull, (test: string) => {
                if(test.length < 15) {
                    return false;
                }
                return true;
            } ],
            response: (res) => {
                return res.status(400).json({
                    message: "Invalid Request. Authorization is required."
                });
            }
        }
    ]
),

(req, res) => {
    res.send("VALID");
});


export default app;


