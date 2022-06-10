import { body } from "express-validator"

export const validateRequest = [
    body("title", "Title debe ser entre 5 y 10 caracteres").trim().isLength({ min: 5, max: 10 }),
    body("description", "Description debe ser entre 5 y 500").trim().isLength({ min: 5, max: 500 })
]


