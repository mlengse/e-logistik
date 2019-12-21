/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_rujuk', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'visit_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'kdppk': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'kdSubSpesialis1': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'kdSarana': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'kdKhusus': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'catatan': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'kdSubSpesialis': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'tglEstRujuk': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'jadwal': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_rujuk',
    timestamps: false
  });
};
