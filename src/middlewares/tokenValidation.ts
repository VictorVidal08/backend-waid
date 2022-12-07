const tokenHelper = require('../helpers/token');
const { Req, Res, Next } = require('express');

const validToken = (req: typeof Req, res: typeof Res, next: typeof Next) => {
    const { authorization } = req.headers;
    try {
        const dataToken = tokenHelper.verifyToken(authorization);
        if (!authorization) return res.status(401).json({ message: 'Token not found' });
        if (!dataToken) return res.status(401).json({ message: 'Expired or invalid token' });
        next();
    } catch (error) {
        res.status(401).json({ message: 'Ver arquivo validToken' });
    }
};

module.exports = { validToken };