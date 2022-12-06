const { SocialPost, User } = require('../database/models');

export const findAll = async () => {
    const result = await SocialPost.findAll({
        include: [{
          model: User,
          as: 'user',
          attributes: {
            exclude: ['password'],
          }, 
        }],
      });
    return result;
 };