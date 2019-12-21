/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settings', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'name': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'value': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'group': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: 'simpus',
      comment: "null"
    },
    'note': {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    }
  }, {
    tableName: 'settings',
    timestamps: false
  });
};
