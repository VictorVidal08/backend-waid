import { Request, Response } from "express";
import * as token from '../helpers/token';
import { IUser } from "../interfaces/IUser";

const userService = require('../services/userService');

export const findAll = async (_req: Request, res: Response) => {
    try {
        const result = await userService.findAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'ver arquivo userController' });
    }
};

export const create = async (req: Request, res: Response) => {
    const { userName, email, password, image } = req.body;
    const userObject: IUser= {
        userName, email, password, image,
    };
    try {
        const result = await userService.create(userObject);
        if (!result) return res.status(409).json({ message: 'User email already registered' });
        const userToken = token.createToken(email);
        return res.status(201).json({ token: userToken });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'ver arquivo userController' });
    }
}