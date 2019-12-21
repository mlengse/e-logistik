/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('villages', {
    'id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: "null"
    },
    'kode_bps': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'kode_dukcapil': {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "null"
    },
    'desa': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'wilayah': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "null"
    },
    'jml_dusun': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'luas': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'penduduk': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'laki': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'wanita': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'acux': {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      comment: "null"
    },
    'acuy': {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      comment: "null"
    },
    'wilayah_asal': {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'villages',
    timestamps: false
  });
};
