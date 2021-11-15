import { Response } from "express";


export type ValidatorFunction<T> = (test: T) => boolean;

export type ValidationableValidator<T> = ValidatorFunction<T> | ValidatorFunction<T>[];

export type CustomResponseFunction = (res: Response) => void;

/**
 * The shape for custom message and statusCodes for the default responses.
 */
export interface CustomResponse {
    /**
     * The message to respond with.
     */
    message: string;
    /**
     * The HTTP status code to respond with.
     */
    statusCode?: number;
};

export interface Validationable<T> {
    /**
     * The key to access the property value.
     */
    key: string;

    /**
     * The function that will be used to validate the property.
     */
    validator: ValidatorFunction<T>;

    /**
     * The function to call to or message to use to respond to the request if the validation fails.
     */
    response?: CustomResponse | CustomResponseFunction;
}
