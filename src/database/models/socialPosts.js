const SocialPost = (sequelize, DataTypes) => {
    const SocialPost = sequelize.define('SocialPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true  },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.STRING,
      updated: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'SocialPosts',
    });
    
    SocialPost.associate = (models) => {
        SocialPost.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId',
      });
    };
    return SocialPost;
  }
  
  module.exports = SocialPost;