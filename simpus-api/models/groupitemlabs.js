/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupitemlabs', {
    'id': {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'kelompok_item': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'keterangan': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'value': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'groupitemlabs',
    timestamps: false
  });
};
