const { User } = require('../database/models');
const { createToken } = require('../helpers/token');
const { ILogin } = require('../interfaces/ILogin');

export const login = async (loginData: typeof ILogin) => {
    const { email } = loginData;
    const result = await User.findOne({
        attributes: [
            'email', 'password', 'image', 'id'
        ],
        where: { email },
        raw: true, // sequelize retorna uma classe. raw faz com que retorne uma classe como objeto.
    });
    if (!result) return null;
    if (result.password !== loginData.password) return null;
    const token = createToken({ email });
    return { ...result, token };
};