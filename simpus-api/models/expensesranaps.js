/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expensesranaps', {
    'id': {
      type: DataTypes.INTEGER(15),
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
    'tarif_id': {
      type: DataTypes.CHAR(4),
      allowNull: false,
      comment: "null"
    },
    'frekuensi': {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      comment: "null"
    },
    'jumlah': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'bayar': {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      comment: "0 false, 1 true"
    },
    'js': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'jp': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'jb': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'worker_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "null"
    },
    'bpjs_tariff_kode': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'expensesranaps',
    timestamps: false
  });
};
