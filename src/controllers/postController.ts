import { Request, Response } from "express";

const postService = require('../services/postService');

export const findAll = async (_req: Request, res: Response) => {
    try {
        const result = await postService.findAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'SERVER ERROR - ver arquivo postController' });
    }
};