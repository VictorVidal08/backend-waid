const { User } = require('../database/models');

export const findAll = async () => {
    const result = await User.findAll({ attributes: { exclude: ['password'] } });
    return result;
};