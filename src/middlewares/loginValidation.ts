const joiValidation = require('joi');
const { Request, Response, NextFunction } = require('./userValidation');

const loginSchema = joiValidation.object({
    email: joiValidation.string().min(2).max(30).required(),
    password: joiValidation.string().min(4).max(10).required(),
});

const loginValidation = (req: typeof Request, res: typeof Response, next: typeof NextFunction) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = {
    loginValidation,
};