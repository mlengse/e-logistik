/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appointments', {
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
    'patient_id': {
      type: DataTypes.CHAR(11),
      allowNull: false,
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'no_hp': {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "null"
    },
    'tgl_kunjungan': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'tgl_perjanjian': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'keterangan': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'appointments',
    timestamps: false
  });
};
