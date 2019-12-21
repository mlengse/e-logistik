/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'patient_id': {
      type: DataTypes.CHAR(11),
      allowNull: false,
      comment: "null"
    },
    'tinggi_lama': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      comment: "null"
    },
    'berat_lama': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      comment: "null"
    },
    'gol_darah': {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: '',
      comment: "null"
    },
    'riwayat_penyakit': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'alergi_obat': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'penyandang_cacat': {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'cms',
    timestamps: false
  });
};
