'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      allowNull: false,
      isEmail: true,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    roleId: {
      allowNull: false,
      defaultValue: 2,
      isNumeric: true,
      type: DataTypes.INTEGER
    }
  });
  User.associate = function (models) {
    User.belongsTo(models.Role, {
      foreignKey: 'roleId',
      onUpdate: 'CASCADE'
    });
    User.hasMany(models.Document, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      as: 'documents'
    });
  };
  return User;
};