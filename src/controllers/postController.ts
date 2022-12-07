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

export const create = async (req: Request, res: Response) => {
    try {
        const { title, content, userId } = req.body;
        const result = await postService.create(title, content, userId);
        return res.status(201).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'SERVER ERROR - ver arquivo postController' });
    }
}