/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('referrals', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'visit_id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'patient_no_kartu': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'patient_nik': {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "null"
    },
    'patient_nama': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'patient_sex_id': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "null"
    },
    'patient_alamat': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Includes field: Visit.alamat, orchard.dusun, village.desa"
    },
    'patient_typepatient': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'icdx': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'healthcenter_kode': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'visit_tanggal': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'visit_consignor': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'visit_worker': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'visit_polireference': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'hospital': {
      type: DataTypes.CHAR(10),
      allowNull: false,
      comment: "null"
    },
    'rs_tujuan': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'sent': {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "0 : not sent, 1 : sent"
    },
    'created': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'modified': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'referrals',
    timestamps: false
  });
};
