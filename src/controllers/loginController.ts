import { Request, Response } from "express";

const loginService = require('../services/loginService');

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const loginData = { email, password };
    try {
        const result = await loginService.login(loginData);
        if (!result) return res.status(401).json({ message: 'Incorrect username or password' });
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'ver arquivo loginController' });
    }
};