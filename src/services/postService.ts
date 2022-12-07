const { SocialPost, User } = require('../database/models');
const sequelize = require('sequelize');

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

 export const create = async (title: string, content: string, userId: number) => {
    const result = await SocialPost.create({ 
      title,
      content,
      userId,
      published: sequelize.literal('CURRENT_TIMESTAMP'),
      updated: sequelize.literal('CURRENT_TIMESTAMP') 
    });
    
    return result;
 }

 export const deletePost = async (id: number) => {
    const result = await SocialPost.destroy({ where: { id } });
    return result;
 }