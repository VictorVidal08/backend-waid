import { Request, Response } from "express";

const userService = require('../services/userService');

export const findAll = async (_req: Request, res: Response) => {
    try {
        const result = await userService.findAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'ver arquivo userController' });
    }
};