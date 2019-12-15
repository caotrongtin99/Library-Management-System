'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey :true
    },
    username:DataTypes.STRING,
    password:DataTypes.STRING,
    email:DataTypes.STRING,
    role:DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.RequestBook);
    // associations can be defined here
  };
  return User;
};