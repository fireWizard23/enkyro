import { Request, Response, NextFunction } from "express";
import { Validationable } from "./interfaces";
import { runValidation, sendResponse } from "./validateUtils";


export function validateRequestHeaders(validations: Validationable<string | string[] | undefined>[]) {
    return (req: Request, res: Response, _next: NextFunction) => {

        let shouldReturn = false;
        for (const i of validations) {
            const propertyValue = req.headers[i.key];
            if (!runValidation(propertyValue, i.validator)) {
                shouldReturn = true;
                if (i.response == null) {
                    res.status(400).send(`${i.key} is either null or invalid input.`);
                    break;
                }
                
                sendResponse(res, i.response);
                break;
            }
        }
        if(shouldReturn) {
            return;
        }
        _next();
    };

}

