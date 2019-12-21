/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menus', {
    'id': {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'parent_id': {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'path': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'crud': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'active': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      comment: "null"
    }
  }, {
    tableName: 'menus',
    timestamps: false
  });
};
