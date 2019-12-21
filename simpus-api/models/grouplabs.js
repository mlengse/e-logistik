/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grouplabs', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'kelompok_lab': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'grouplabs',
    timestamps: false
  });
};
