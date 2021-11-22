import { Response } from "express";
import { ValidationableResponse, ValidationableValidator, isCustomResponse } from "./interfaces";

export function sendResponse(res: Response, v: ValidationableResponse) {

    if (isCustomResponse(v)) {
        res.status(v.statusCode || 400).send(v.message);
    } else {
        v(res);
    }
}
export function runValidation<T>(toCheck: T, validator: ValidationableValidator<T>): boolean {
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
