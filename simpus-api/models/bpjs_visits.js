/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_visits', {
    'id': {
      type: DataTypes.BIGINT,
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
    'noKunjungan': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'noKartu': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'tglDaftar': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'keluhan': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'kdSadar': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'sistole': {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'diastole': {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'beratBadan': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'tinggiBadan': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'respRate': {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'heartRate': {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'terapi': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'kdProviderRujukLanjut': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'kdStatusPulang': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'tglPulang': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'kdDokter': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'kdDiag1': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'kdDiag2': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'kdDiag3': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'kdPoliRujukInternal': {
      type: DataTypes.CHAR(3),
      allowNull: false,
      comment: "null"
    },
    'kdPoliRujukLanjut': {
      type: DataTypes.CHAR(3),
      allowNull: false,
      comment: "null"
    },
    'ws_response': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'last_try': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'sender': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'sent': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'deleted': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'deleted_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'bpjs_registration_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'kdTacc': {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'alasanTacc': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'bpjs_visits',
    timestamps: false
  });
};
