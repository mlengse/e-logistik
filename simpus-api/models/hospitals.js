/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hospitals', {
    'id': {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'rs': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'wilayah': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "0 : false, 1 : true"
    },
    'bpjs_hospital_kode': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    },
    'kode_dinas_rumahsakit': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'hospitals',
    timestamps: false
  });
};
