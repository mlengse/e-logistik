/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arosacostemps', {
    'id': {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'group_id': {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      comment: "null"
    },
    'menu_id': {
      type: DataTypes.STRING(5),
      allowNull: false,
      comment: "null"
    },
    'access': {
      type: DataTypes.CHAR(100),
      allowNull: false,
      comment: "null"
    },
    'crud': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'arosacostemps',
    timestamps: false
  });
};
