/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anamnesisranaps', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'visitsranap_id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'keluhan_utama': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'tindakan': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'diagnosis_fisik': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'systole': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'diastole': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'nadi': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'suhu': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'respirationrate': {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      comment: "null"
    },
    'tinggi': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'berat': {
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "null"
    },
    'worker_id': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'kesadaran': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'rencana_tindakan': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'anamnesisranaps',
    timestamps: false
  });
};
