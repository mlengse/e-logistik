/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tariffs', {
    'id': {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'grouptarif_id': {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      comment: "null"
    },
    'nama': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'js': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'jp': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'jb': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'kelompok_id': {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "null"
    },
    'bpjs_tariff_kode': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'tariffs',
    timestamps: false
  });
};
