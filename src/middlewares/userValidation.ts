const joi = require('joi');
export const { Request, Response, NextFunction } = require('express');

const userSchema = joi.object({
    email: joi.string().email({ minDomainSegments: 2 }).required(),
    password: joi.string().min(6).required(),
    userName: joi.string().min(3).required(),
    image: joi.string(),
});

const userValidation = (req: typeof Request, res: typeof Response, next: typeof NextFunction) => {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
   
    next();
};

module.exports = {
    userValidation,
};