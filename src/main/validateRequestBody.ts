import { Request, Response, NextFunction } from "express";
import { Validationable, ValidationableResponse, ValidationableValidator, isCustomResponse } from "./interfaces";


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
                    res.status(300).send(`${i.key} is either null or invalid input.`);
                    continue;
                }
                
                sendResponse(res, i.response);
            }
        }
        if(shouldReturn) {
            return;
        }
        _next();
    };

}
function sendResponse(res: Response, v: ValidationableResponse) {

    if (isCustomResponse(v)) {
        res.status(v.statusCode || 300).send(v.message);
    } else {
        v(res);
    }
}
function runValidation<T>(toCheck: T, validator: ValidationableValidator<T>): boolean {
    if (Array.isArray(validator)) {
        for (const v of validator) {
            if (!v(toCheck)) { return false; }
        }
        return true;
    }
    else {
        return validator(toCheck);
    }
}
