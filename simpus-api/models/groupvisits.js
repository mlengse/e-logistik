/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupvisits', {
    'id': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'kelompok_kunjungan': {
      type: DataTypes.CHAR(4),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'groupvisits',
    timestamps: false
  });
};
