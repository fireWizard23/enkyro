import { Validationable, Validators } from "../index";
import { ValidationableValidator, ValidationableResponse } from "../index";

export class ValidationBase<T> implements Validationable<T> {
    constructor(
        public key: string,
        public validator: ValidationableValidator<T>,
        public response?: ValidationableResponse | undefined
    ) {}

}

export class MinCharValidation extends ValidationBase<string> {
    constructor(
        public key: string,
        min: number,
        public response?: ValidationableResponse | undefined
    ) {
        super(key, Validators.minChar(min),response);
    }
}





