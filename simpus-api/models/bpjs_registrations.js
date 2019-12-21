/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bpjs_registrations', {
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
    'kdProviderPeserta': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'tglDaftar': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'noKartu': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'kdPoli': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'keluhan': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'kunjSakit': {
      type: DataTypes.INTEGER(1),
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
    'rujukBalik': {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      comment: "null"
    },
    'rawatInap': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'ws_response': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'last_try': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'sender': {
      type: DataTypes.CHAR(2),
      allowNull: false,
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
    }
  }, {
    tableName: 'bpjs_registrations',
    timestamps: false
  });
};
