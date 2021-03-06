import { Request, Response, NextFunction } from "express";
import { Validationable, ValidationableResponse, ValidationableValidator, isCustomResponse } from "./interfaces";
import { runValidation, sendResponse } from "./validateUtils";


export function validateRequestBody<T = unknown>(validations: Validationable<T>[]) {
    return (req: Request, res: Response, _next: NextFunction) => {
        if (req.body == null) {
            throw new Error("Request body is null | undefined. Have you tried using express.json()?");
        }
        let shouldReturn = false;
        for (const i of validations) {
            const propertyValue = req.body[i.key];
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

