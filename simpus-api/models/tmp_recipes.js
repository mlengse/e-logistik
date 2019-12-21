/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_recipes', {
    'id': {
      type: DataTypes.INTEGER(10),
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
    'drug_id': {
      type: DataTypes.CHAR(6),
      allowNull: false,
      comment: "null"
    },
    'jumlah': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'dosis': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'puyer': {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      comment: "null"
    },
    'permintaan': {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'bpjs_drug_kode': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'bpjs_drug_nama': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'tmp_recipes',
    timestamps: false
  });
};
