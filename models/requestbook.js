'use strict';
module.exports = (sequelize, DataTypes) => {
  const RequestBook = sequelize.define('RequestBook', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey :true
    },
  }, {});
  RequestBook.associate = function(models) {
    RequestBook.belongsTo(models.User);
    RequestBook.hasMany(models.Book);
    // associations can be defined here
  };
  return RequestBook;
};