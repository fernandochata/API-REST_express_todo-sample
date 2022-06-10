import { body } from "express-validator"

export const validateRequest = [
    body("title", "Title debe ser entre 5 y 10 caracteres").trim().isLength({ min: 5, max: 10 }),
    body("description", "Description debe ser entre 5 y 50").trim().isLength({ min: 5, max: 50 }),
    body("status").custom(value => {
        if(![true, false].includes(value)) {
        //if (value !== true && value !== false) {
            throw new Error("Status debe ser true o false")
        } return value
    })

]


