const { User } = require('../database/models');
const { IUser } = require('../interfaces/IUser');

export const findAll = async () => {
    const result = await User.findAll({ attributes: { exclude: ['password'] } });
    return result;
};

export const create = async (userObject: typeof IUser) => {
    const [user, created] = await User.findOrCreate({
        where: { email: userObject.email },
        defaults: {
            userName: userObject.userName,
            email: userObject.email,
            password: userObject.password,
            image: userObject.image,
        },
        });
        if (created) return user.dataValues;
    return false;
};
