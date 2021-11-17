import { ValidatorFunction } from "./interfaces";


export abstract class Validators {

    /**
     * Creates a validator function that validates if the number is atleast at minimum.
     * @param min The minimum number, the test number parameter must have.
     * @returns A function that will validate the number according to the specified minimum value.
     * * The function will return false if the parameter is null | undefined or not number
     */
    static minNumber(min: number): ValidatorFunction<number> {
        return (test) => {
            if(test == null || typeof test != "number") {return false;}
            return test >= min;
        };
    }

    /**
     * Validates a string if it's atleast a certain amount of character length.
     * @param min The minimum amount of characters a string must have.
     * @returns A function that will check if the given string parameter of atleast a minimum length.
     * * The function will return false if the parameter is null | undefined or not string
     * 
     */
    static minChar(min: number) : ValidatorFunction<string> {
        return (test) => {
            if(test == null || typeof test != "string" || test.length < min) {
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
     * * The function will return false if the parameter is null | undefined or not an array
     * 
     */
    static minArrayLength<T>(min: number) : ValidatorFunction<T[]> {
        return (test) => {
            if(test == null || !Array.isArray(test) || test.length < min) {
                return false;
            }
            return true;
        }
    }



    /**
     * Creates a validator function that validates if the number is less than the maximum. (Exclusive)
     * @param max The maximum number the test paramater can be.
     * @returns A function that will validate if the given number is not greater than the 'max' parameter.
     * * The function will return false if the parameter is null | undefined or not number
     */
    static maxNumber(max: number): ValidatorFunction<number> {
        return (test) => {
            if(test == null || typeof test != "number") {return false;}
            return test < max;
        };
    }

    /**
     * 
     * @param max The maximum length a string must have (Exclusive).
     * @returns A function that will validate if the given string is lower than the parameter. 
     * * The function will return false if the parameter is null or not string
     */
    static maxChar(max: number) : ValidatorFunction<string>{
        return (test) => {
            if(test == null || typeof test != "string" || test.length >= max) {
                return false;
            }
            return true;
        }
    }

    /**
     * Validates an array if it's length is less than the given length.
     * @param max The maximum length of the array can have (Exclusive)
     * @returns A function that will check if the given array is less than the maximum length.
     * * The function will return false if the parameter is null | undefined or not an Array
     * 
     */
     static  maxArrayLength<T>(max: number) : ValidatorFunction<T[]> {
        return (test) => {
            if(test == null || !Array.isArray(test) || test.length >= max) {
                return false;
            }
            return true;
        }
    }
    

    /**
     * Validates a number if is within the range specified.
     * @param min The minimum number
     * @param max The maximum number (Exclusive)
     * @returns A function that will validate if the number is within the range of min and max
     * * The function will return false if the parameter is null | undefined or not a Number 
     */
    static rangeNumber(min: number, max: number): ValidatorFunction<number> {
        return (test) => {
            if (test == null || typeof test != "number" || test < min || test >= max) {
                return false;
            }
            return true;
        };
    }

    
    /**
     * Validates a string if its length is within the range specified.
     * @param min The minimum length
     * @param max The maximum length (Exclusive)
     * @returns A function that will validate if the string's length is within the range of min and max
     * * The function will return false if the parameter is null | undefined or not a String 
     */
     static rangeChar(min: number, max: number): ValidatorFunction<string> {
        return (test) => {
            if (test == null || typeof test != "string" || test.length < min || test.length >= max) {
                return false;
            }
            return true;
        };
    }

    /**
     * Validates an Array if its length is within the range specified.
     * @param min The minimum length
     * @param max The maximum length (Exclusive)
     * @returns A function that will validate if the Array's length is within the range of min and max
     * * The function will return false if the parameter is null | undefined or not an Array 
     */
     static rangeArrayLength<T>(min: number, max: number): ValidatorFunction<T[]> {
        return (test) => {
            if (test == null || !Array.isArray(test) || test.length < min || test.length >= max) {
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
     * @returns A function that will validate if the given parameter is null | undefined (Uses '!=' instead of '!=='). 
     */
    static notNull(test: any): boolean {
        return test != null;
    }


    /**
     * Validates the property if it is a number
     * @returns True if the test parameter is of type number
     */
    static isNumber(test: unknown) : test is number{
        return typeof test === "number";
    }

   

    /**
     * Validates the property if it is an object
     * @returns True if the test parameter is of type object
     */
     static isObject(test: unknown): test is object {
        return typeof test === "object";
    }

    /**
     * Validates the property if it is an boolean
     * @returns True if the test parameter is of type boolean
     */
     static isBoolean(test: unknown): test is boolean {
        return typeof test === "boolean";
    }
    
    /**
     * Validates the property if it is an array
     * @returns True if the test parameter is of type array
     */
     static isArray(test: unknown): test is Array<any> {
        return Array.isArray(test);
    }

    static isString(test: unknown) : test is string {
        return typeof test === "string";
    }

}
