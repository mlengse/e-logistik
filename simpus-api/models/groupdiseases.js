/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupdiseases', {
    'id': {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'kelompok_penyakit': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'groupdiseases',
    timestamps: false
  });
};
