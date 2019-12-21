/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consignors', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'pengirim': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'consignors',
    timestamps: false
  });
};
