/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aros_acos', {
    'id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'aro_id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'aco_id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    '_create': {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    '_read': {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    '_update': {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    '_delete': {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'aros_acos',
    timestamps: false
  });
};
