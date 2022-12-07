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

export const deletePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await postService.deletePost(id);
        return res.status(204).json({ message: 'Post deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'SERVER ERROR - ver arquivo postController' });
    }
}

export const updatePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        await postService.updatePost(id, title, content);
        return res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'SERVER ERROR - ver arquivo postController' });
    }
}