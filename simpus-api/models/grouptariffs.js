/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grouptariffs', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'kelompok_tarif': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'grouptariffs',
    timestamps: false
  });
};
