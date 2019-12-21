/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acos', {
    'id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'parent_id': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'model': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'foreign_key': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'alias': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'lft': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'rght': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'acos',
    timestamps: false
  });
};
