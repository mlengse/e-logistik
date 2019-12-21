/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('malarias', {
    'id': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'visit_id': {
      type: DataTypes.STRING(11),
      allowNull: false,
      comment: "null"
    },
    'deteksi': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'slide_test': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'kode_dx': {
      type: DataTypes.CHAR(7),
      allowNull: true,
      comment: "null"
    },
    'gamet': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'kelambu': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'pemakaian_kelambu': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '3',
      comment: "null"
    },
    'alasan_tidak_pakai_kelambu': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '3',
      comment: "null"
    },
    'kondisi_kelambu': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'tinggal_tempat_lain': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'lama': {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      comment: "null"
    },
    'worker_id': {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "null"
    },
    'village_id': {
      type: DataTypes.CHAR(20),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'malarias',
    timestamps: false
  });
};
