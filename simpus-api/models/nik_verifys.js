/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nik_verifys', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'no_bpjs': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'wrong_nik': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'old_nik': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'tanggal': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'nik_verifys',
    timestamps: false
  });
};
