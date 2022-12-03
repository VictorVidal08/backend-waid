const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
      {
        timestamps: false,
        tableName: 'Users',
      });
    
      User.associate = (models) => {
        User.hasMany(models.SocialPost, {
          as: 'User',
          foreignKey: 'userId',
        });
      };
    return User;
  }
  
  module.exports = User;