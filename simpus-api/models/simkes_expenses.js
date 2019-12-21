/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('simkes_expenses', {
    'visit_id': {
      type: DataTypes.CHAR(50),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'tariff_id': {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'frekuensi': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'jumlah': {
      type: DataTypes.STRING(11),
      allowNull: true,
      comment: "null"
    },
    'bayar': {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "null"
    },
    'js': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'jp': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'jb': {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: "null"
    },
    'nip': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'simkes_expenses',
    timestamps: false
  });
};
