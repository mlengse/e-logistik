/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_actions', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'kdStatusPulang': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'nmStatusPulang': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'rajal': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'ranap': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'bpjs_actions',
    timestamps: false
  });
};
