import { ValidatorFunction } from "./interfaces";


export abstract class Validators {

    /**
     * Creates a validator function that validates if the number is atleast at minimum.
     * @param min The minimum number, the test number parameter must have.
     * @returns A function that will validate the number according to the specified minimum value.
     */
    static minNumber(min: number): ValidatorFunction<number> {
        return (test) => {
            return test >= min;
        };
    }

    /**
     * Validates a string if it's atleast a certain amount of character length.
     * @param min The minimum amount of characters a string must have.
     * @returns A function that will check if the given string parameter of atleast a minimum length.
     * * The function will return false if the parameter is null 
     * 
     */
    static minChar(min: number) : ValidatorFunction<string> {
        return (test) => {
            if(test == null || test.length < min) {
                return false;
            }
            return true;
        }
    }

    /**
     * Validates an array if it's length is atleast the given amount.
     * @param min The minimum length of the array must have.
     * @returns A function that will check if the given array is atleast the minimum length.
     * * The function will return false if the parameter is null 
     * 
     */
    static minArrayLength<T>(min: number) : ValidatorFunction<T[]> {
        return (test) => {
            if(test == null || test.length < min) {
                return false;
            }
            return true;
        }
    }



    /**
     * Creates a validator function that validates if the number is less than the maximum. (Exclusive)
     * @param max The maximum number the test paramater can be.
     * @returns A function that will validate if the given number is not greater than the 'max' parameter.
     */
    static maxNumber(max: number): ValidatorFunction<number> {
        return (test) => {
            return test < max;
        };
    }

    /**
     * 
     * @param max The maximum length a string must have (Exclusive).
     * @returns A function that will validate if the given string is lower than the parameter. 
     * * The function will return false if the parameter is null 
     */
    static maxChar(max: number) : ValidatorFunction<string>{
        return (test) => {
            if(test == null || test.length >= max) {
                return false;
            }
            return true;
        }
    }

    /**
     * Validates an array if it's length is less than the given length.
     * @param max The maximum length of the array can have (Exclusive)
     * @returns A function that will check if the given array is less than the maximum length.
     * * The function will return false if the parameter is null 
     * 
     */
     static maxArrayLength<T>(max: number) : ValidatorFunction<T[]> {
        return (test) => {
            if(test == null || test.length >= max) {
                return false;
            }
            return true;
        }
    }
    

    /**
     * Validates a string | unknown[] based on its length.
     * @param min The minimum length
     * @param max The maximum length
     * @returns A function that will validate if the length of a string | unknown[] is within the range of min and max (Exclusive). Returns false if the parameter is null.
     */
    static range<T = unknown>(min: number, max: number): ValidatorFunction<number | string | Array<T>> {
        return (test) => {
            if(typeof test === "number") {
                return test >= min && test < max;
            }
            if (test == null || test.length < min || test.length >= max) {
                return false;
            }
            return true;
        };
    }

    /**
     * Validates a string if it matches with the Regex.
     * @param regex The regex to use to validate.
     * @returns A function that will validate a string if it matches the given Regex. Returns false if the parameter is null.
     */
    static regex(regex: RegExp): ValidatorFunction<string> {
        return (test) => {
            if (test == null) { return false; }
            return regex.test(test);
        };
    }

    /**
     * Validates a parameter if it's null | undefined.
     * @returns A function that will validate if the given parameter is null | undefined.
     */
    static notNull(test: any): boolean {
        return test != null;
    }

}
