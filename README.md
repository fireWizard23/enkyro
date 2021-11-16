# Welcome to Enkyro 👋
![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> A simple but powerful middleware to validate request object in express

## **Code Example**

```typescript
import { validateRequestBody, Validators } from 'enkyro';
import express from 'express';

const app = express();

app.get("/", validateRequestBody([
    {
        key: "username",
        validator: Validators.rangeChar(5, 10),
        response: {
            message: "Username must be between 5-10 characters."
        }
    },
    {
        key: "password",
        validator: [Validators.minChar(8), Validators.regex(/regex/)]
    }
]), (req, res) => {
    res.send("Successfully validated!");
})

 
```


### **Validationable interface** 

```typescript
type ValidationableResponse = CustomResponseOption | CustomResponseFunction;

type ValidatorFunction<T> = (test: T) => boolean;

type ValidationableValidator<T> = ValidatorFunction<T> | ValidatorFunction<T>[];


interface Validationable<T> {
    key: string;
    validator:  ValidationableValidator<T>;
    response?: ValidationableResponse;
}

```

***


## Author

👤 **__Rich__**


## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_