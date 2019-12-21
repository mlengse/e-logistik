/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historiesranaps', {
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
    'waktu_datang': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'waktu_dilayani': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'dilayani': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "0 : false, 1 : true"
    },
    'waktu_terima_obat': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'terima_obat': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "0 : false, 1 : true"
    },
    'waktu_bayar': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'bayar': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "0 : false, 1 : true"
    },
    'urut': {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'petugas_medis': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'petugas_obat': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'petugas_kasir': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'historiesranaps',
    timestamps: false
  });
};
