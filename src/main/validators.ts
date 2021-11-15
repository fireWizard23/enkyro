import { ValidatorFunction } from "./interfaces";


export abstract class Validators {
    /**
     * Creates a validator function that validates if the length is atleast at the minimum.
     * @param min The minimum number of length the test paramater must have.
     * @returns A function that will validate the length of either an Array or string according to the specified minimum value.  If the paramter is null, it will return false.
     */
    static min<T = unknown>(min: number): ValidatorFunction<number | string  | Array<T> > {
        return (test) => {
            if(typeof test === "number") {
                return test >= min;
            }
            if (test == null || test.length < min) {
                return false;
            }
            return true;
        };
    }

    /**
     * Creates a validator function that validates if the length is less than the maximum. (Exclusive)
     * @param max The minimum number of length the test paramater must have.
     * @returns A function that will validate the length of either an Array or string according to the specified maximum value. If the paramter is null, it will return false.
     */
    static max<T = unknown>(max: number): ValidatorFunction<number | string | Array<T>> {
        return (test) => {
            if(typeof test === "number") {
                return test < max;
            }

            if (test == null || test.length >= max) {
                return false;
            }
            return true;
        };
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
