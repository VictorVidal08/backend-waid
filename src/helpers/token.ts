import jwt from 'jsonwebtoken';
import 'dotenv/config';

const { JWT_SECRET } = process.env;

export const createToken = (email: string) => {
  if (!JWT_SECRET) throw new Error('senha não foi encontrada');

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d', algorithm: 'HS256' });

  return token;
};

export const verifyToken = (token: string) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET as string) as jwt.JwtPayload;
    return payload;
  } catch (error) {
    return null;
  }
};
