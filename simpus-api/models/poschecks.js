/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poschecks', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'healthcenter_kode': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'poschecks',
    timestamps: false
  });
};
